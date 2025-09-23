import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as path from 'path';
import * as fs from 'fs';
import { Logger } from '@vendure/core';
import { loggerCtx } from '../constants';

@Injectable()
export class FirebaseService {
    private app: admin.app.App | null = null;

    constructor() {
        this.initializeFirebase();
    }

    async reinitialize(): Promise<void> {
        try {
            // Delete existing apps
            const deletePromises = admin.apps.filter(app => app !== null).map(app => app!.delete());
            await Promise.all(deletePromises);
            this.app = null;
            
            // Re-initialize
            this.initializeFirebase();
        } catch (error) {
            Logger.error('Failed to reinitialize Firebase', loggerCtx);
            throw error;
        }
    }

    private initializeFirebase() {
        try {
            // Clear any existing apps to avoid conflicts
            if (admin.apps.length > 0) {
                Logger.info('Firebase app already exists, using existing instance', loggerCtx);
                this.app = admin.apps[0];
                return;
            }

            const serviceAccountPath = path.join(__dirname, '../../../service-account.json');
            Logger.info(`Looking for service account at: ${serviceAccountPath}`, loggerCtx);
            
            // Check if file exists
            if (!fs.existsSync(serviceAccountPath)) {
                throw new Error(`Service account file not found at: ${serviceAccountPath}`);
            }

            // Read and parse the service account file
            const serviceAccountContent = fs.readFileSync(serviceAccountPath, 'utf8');
            const serviceAccount = JSON.parse(serviceAccountContent);

            // Validate required fields
            if (!serviceAccount.project_id || !serviceAccount.private_key || !serviceAccount.client_email) {
                throw new Error('Invalid service account: missing required fields (project_id, private_key, client_email)');
            }

            Logger.info(`Initializing Firebase with project: ${serviceAccount.project_id}`, loggerCtx);

            this.app = admin.initializeApp({
                credential: admin.credential.cert({
                    projectId: serviceAccount.project_id,
                    clientEmail: serviceAccount.client_email,
                    privateKey: serviceAccount.private_key.replace(/\\n/g, '\n'), // Fix newline characters
                }),
                projectId: serviceAccount.project_id,
            });

            Logger.info('Firebase Admin SDK initialized successfully', loggerCtx);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            Logger.error(`Failed to initialize Firebase Admin SDK: ${errorMessage}`, loggerCtx);
            throw error;
        }
    }

    async sendNotification(token: string, title: string, body: string, data?: any): Promise<string> {
        try {
            const message: admin.messaging.Message = {
                notification: {
                    title,
                    body,
                },
                token,
                data: data || {},
            };

            const response = await admin.messaging().send(message);
            Logger.info(`Notification sent successfully: ${response}`, loggerCtx);
            return response;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            Logger.error(`Failed to send notification: ${errorMessage}`, loggerCtx);
            throw error;
        }
    }

    async sendMultipleNotifications(tokens: string[], title: string, body: string, data?: any): Promise<admin.messaging.BatchResponse> {
        try {
            Logger.info(`Attempting to send notifications to ${tokens.length} tokens`, loggerCtx);
            Logger.info(`Tokens: ${tokens.join(', ')}`, loggerCtx);
            
            // Prepare data payload - ensure all values are strings as required by FCM
            const stringifiedData: { [key: string]: string } = {};
            if (data) {
                for (const [key, value] of Object.entries(data)) {
                    stringifiedData[key] = typeof value === 'string' ? value : JSON.stringify(value);
                }
            }

            const message: admin.messaging.MulticastMessage = {
                notification: {
                    title,
                    body,
                },
                data: {
                    ...stringifiedData,
                    // Add metadata for service worker handling
                    click_action: 'FLUTTER_NOTIFICATION_CLICK',
                    timestamp: Date.now().toString(),
                },
                tokens,
                // Configure for both foreground and background delivery
                webpush: {
                    headers: {
                        'TTL': '3600', // Time to live in seconds
                    },
                    notification: {
                        title,
                        body,
                        icon: '/firebase-logo.png',
                        badge: '/badge-icon.png',
                        requireInteraction: false, // Allow auto-dismiss
                        silent: false,
                    },
                    fcmOptions: {
                        link: '/', // URL to open when notification is clicked
                    },
                },
            };

            const response = await admin.messaging().sendEachForMulticast(message);
            Logger.info(`Batch notifications sent. Success count: ${response.successCount}, Failure count: ${response.failureCount}`, loggerCtx);
            
            // Log detailed error information for failed notifications
            if (response.failureCount > 0) {
                response.responses.forEach((resp, index) => {
                    if (!resp.success && resp.error) {
                        Logger.error(`Failed to send to token ${tokens[index]}: ${resp.error.code} - ${resp.error.message}`, loggerCtx);
                    }
                });
            }
            
            return response;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            Logger.error(`Failed to send batch notifications: ${errorMessage}`, loggerCtx);
            if (error instanceof Error && 'code' in error) {
                Logger.error(`Error code: ${(error as any).code}`, loggerCtx);
            }
            throw error;
        }
    }

    async validateToken(token: string): Promise<boolean> {
        try {
            Logger.info(`Validating token: ${token}`, loggerCtx);
            await admin.messaging().send({
                token,
                data: { test: 'true' },
            }, true); // dry run
            Logger.info(`Token is valid: ${token}`, loggerCtx);
            return true;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            const errorCode = error instanceof Error && 'code' in error ? (error as any).code : 'unknown';
            Logger.warn(`Invalid token: ${token} - Error: ${errorCode} - ${errorMessage}`, loggerCtx);
            return false;
        }
    }
}