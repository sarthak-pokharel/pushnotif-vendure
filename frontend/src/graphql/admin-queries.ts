import * as Apollo from '@apollo/client';

const { gql } = Apollo;

// Admin API queries - admin-facing functionality
export const GET_CUSTOMERS_WITH_TOKENS = gql`
  query GetCustomersWithTokens {
    customersWithTokens {
      customer {
        id
        firstName
        lastName
        emailAddress
      }
      tokens {
        id
        fcmToken
        deviceId
        isActive
        createdAt
      }
      activeTokensCount
    }
  }
`;

export const SEND_PUSH_NOTIFICATION = gql`
  mutation SendPushNotification($input: SendPushNotificationInput!) {
    sendPushNotification(input: $input) {
      success
      sent
      failed
      message
    }
  }
`;

export const GET_PUSH_SUBSCRIPTIONS = gql`
  query GetPushSubscriptions {
    pushSubscriptions {
      id
      fcmToken
      deviceId
      userAgent
      isActive
      createdAt
      customer {
        id
        firstName
        lastName
        emailAddress
      }
    }
  }
`;

export const UPDATE_SUBSCRIBED_DEVICE = gql`
  mutation UpdateSubscribedDevice($input: UpdateSubscribedDeviceInput!) {
    updateSubscribedDevice(input: $input) {
      success
      message
    }
  }
`;

export const DELETE_SUBSCRIBED_DEVICE = gql`
  mutation DeleteSubscribedDevice($id: ID!) {
    deleteSubscribedDevice(id: $id) {
      success
      message
    }
  }
`;