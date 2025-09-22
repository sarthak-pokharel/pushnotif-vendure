import * as Apollo from '@apollo/client';

const { gql } = Apollo;

export const SUBSCRIBE_TO_PUSH_NOTIFICATIONS = gql`
  mutation SubscribeToPushNotifications($fcmToken: String!, $deviceId: String, $userAgent: String) {
    subscribeToPushNotifications(fcmToken: $fcmToken, deviceId: $deviceId, userAgent: $userAgent) {
      success
      message
    }
  }
`;

export const UNSUBSCRIBE_FROM_PUSH_NOTIFICATIONS = gql`
  mutation UnsubscribeFromPushNotifications($fcmToken: String!) {
    unsubscribeFromPushNotifications(fcmToken: $fcmToken) {
      success
      message
    }
  }
`;

export const GET_MY_PUSH_SUBSCRIPTIONS = gql`
  query GetMyPushSubscriptions {
    myPushSubscriptions {
      id
      fcmToken
      deviceId
      userAgent
      isActive
      createdAt
    }
  }
`;