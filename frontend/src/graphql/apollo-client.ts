// Use dynamic import to avoid module resolution issues
let ApolloClient: any;
let InMemoryCache: any;
let createHttpLink: any;
let ApolloProvider: any;
let useMutation: any;
let useQuery: any;
let gql: any;

const initializeApollo = async () => {
  if (ApolloClient) return; // Already initialized

  try {
    const apolloModule = await import('@apollo/client');
    ApolloClient = apolloModule.ApolloClient;
    InMemoryCache = apolloModule.InMemoryCache;
    createHttpLink = apolloModule.createHttpLink;
    ApolloProvider = apolloModule.ApolloProvider;
    useMutation = apolloModule.useMutation;
    useQuery = apolloModule.useQuery;
    gql = apolloModule.gql;
  } catch (error) {
    console.error('Failed to load Apollo Client:', error);
  }
};

// Initialize Apollo Client
initializeApollo();

// Create clients
const createClients = () => {
  const shopHttpLink = createHttpLink({
    uri: 'http://localhost:3000/shop-api',
  });

  const adminHttpLink = createHttpLink({
    uri: 'http://localhost:3000/admin-api',
  });

  const shopClient = new ApolloClient({
    link: shopHttpLink,
    cache: new InMemoryCache(),
  });

  const adminClient = new ApolloClient({
    link: adminHttpLink,
    cache: new InMemoryCache(),
  });

  return { shopClient, adminClient };
};

// Export a function to get initialized Apollo components
export const getApollo = async () => {
  await initializeApollo();
  const { shopClient, adminClient } = createClients();

  return {
    ApolloProvider,
    useMutation,
    useQuery,
    gql,
    shopClient,
    adminClient,
    client: shopClient // default client
  };
};