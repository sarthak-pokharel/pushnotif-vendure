import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as path from 'path';
import { Logger } from '@vendure/core';
import { loggerCtx } from '../constants';

@Injectable()
export class FirebaseService {
    private app: admin.app.App | null = null;

    constructor() {
        this.initializeFirebase();
    }

    private initializeFirebase() {
        try {
            const serviceAccountPath = path.join(__dirname, '../../../service-account.json');
            const serviceAccount = require(serviceAccountPath);

            if (!admin.apps.length) {
                this.app = admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount),
                    projectId: serviceAccount.project_id,
                });
                Logger.info('Firebase Admin SDK initialized successfully', loggerCtx);
            } else {
                this.app = admin.apps[0];
            }
        } catch (error) {
            Logger.error('Failed to initialize Firebase Admin SDK', loggerCtx);
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
            const message: admin.messaging.MulticastMessage = {
                notification: {
                    title,
                    body,
                },
                tokens,
                data: data || {},
            };

            const response = await admin.messaging().sendEachForMulticast(message);
            Logger.info(`Batch notifications sent. Success count: ${response.successCount}, Failure count: ${response.failureCount}`, loggerCtx);
            return response;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            Logger.error(`Failed to send batch notifications: ${errorMessage}`, loggerCtx);
            throw error;
        }
    }

    async validateToken(token: string): Promise<boolean> {
        try {
            await admin.messaging().send({
                token,
                data: { test: 'true' },
            }, true); // dry run
            return true;
        } catch (error) {
            Logger.warn(`Invalid token: ${token}`, loggerCtx);
            return false;
        }
    }
}