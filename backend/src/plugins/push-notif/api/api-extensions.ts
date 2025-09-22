import gql from 'graphql-tag';

export const shopApiExtensions = gql`
    type SubscribedDevice implements Node {
        id: ID!
        createdAt: DateTime!
        updatedAt: DateTime!
        fcmToken: String!
        deviceId: String
        userAgent: String
        isActive: Boolean!
    }

    type PushNotificationResponse {
        success: Boolean!
        message: String!
    }

    type CustomerAuthResponse {
        success: Boolean!
        message: String!
        customer: Customer
        token: String
    }

    type CustomerRegistrationResponse {
        success: Boolean!
        message: String!
        customer: Customer
    }

    extend type Mutation {
        subscribeToPushNotifications(fcmToken: String!, deviceId: String, userAgent: String): PushNotificationResponse!
        unsubscribeFromPushNotifications(fcmToken: String!): PushNotificationResponse!
        registerCustomer(email: String!, password: String!, firstName: String!, lastName: String!): CustomerRegistrationResponse!
        authenticateCustomer(email: String!, password: String!): CustomerAuthResponse!
    }

    extend type Query {
        myPushSubscriptions: [SubscribedDevice!]!
        currentCustomerProfile: Customer
    }
`;

export const adminApiExtensions = gql`
    type SubscribedDevice implements Node {
        id: ID!
        createdAt: DateTime!
        updatedAt: DateTime!
        fcmToken: String!
        deviceId: String
        userAgent: String
        isActive: Boolean!
        customer: Customer
    }

    type PushNotificationResponse {
        success: Boolean!
        message: String!
    }

    type SendNotificationResult {
        success: Boolean!
        sent: Int!
        failed: Int!
        message: String!
    }

    input SendPushNotificationInput {
        title: String!
        body: String!
        customerIds: [ID!]
        deviceIds: [ID!]
        data: JSON
    }

    extend type Mutation {
        sendPushNotification(input: SendPushNotificationInput!): SendNotificationResult!
    }

    extend type Query {
        pushSubscriptions: [SubscribedDevice!]!
        pushSubscription(id: ID!): SubscribedDevice
        allCustomers: [Customer!]!
        customerById(id: ID!): Customer
        customersWithTokens: [CustomerWithTokens!]!
    }

    type CustomerWithTokens {
        customer: Customer!
        tokens: [SubscribedDevice!]!
        activeTokensCount: Int!
    }
`;