import * as Apollo from '@apollo/client';

const { gql } = Apollo;

// Shop API queries - customer-facing functionality
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

// Vendure built-in customer queries
export const REGISTER_CUSTOMER_ACCOUNT = gql`
  mutation RegisterCustomerAccount($input: RegisterCustomerInput!) {
    registerCustomerAccount(input: $input) {
      ... on Success {
        success
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

export const AUTHENTICATE = gql`
  mutation Authenticate($username: String!, $password: String!) {
    authenticate(input: { native: { username: $username, password: $password } }) {
      ... on CurrentUser {
        id
        identifier
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

export const GET_ACTIVE_CUSTOMER = gql`
  query GetActiveCustomer {
    activeCustomer {
      id
      firstName
      lastName
      emailAddress
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout {
      success
    }
  }
`;