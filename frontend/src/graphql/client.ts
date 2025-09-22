import * as Apollo from '@apollo/client';

const { ApolloClient, InMemoryCache, createHttpLink } = Apollo;

const shopHttpLink = createHttpLink({
  uri: 'http://localhost:3000/shop-api',
});

const adminHttpLink = createHttpLink({
  uri: 'http://localhost:3000/admin-api',
});

export const shopClient = new ApolloClient({
  link: shopHttpLink,
  cache: new InMemoryCache(),
});

export const adminClient = new ApolloClient({
  link: adminHttpLink,
  cache: new InMemoryCache(),
});

// Default client for backwards compatibility
export const client = shopClient;