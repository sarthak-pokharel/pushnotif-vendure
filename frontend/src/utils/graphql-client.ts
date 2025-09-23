// Simple GraphQL client without Apollo
export class SimpleGraphQLClient {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async request(query: string, variables?: unknown) {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Important: This sends cookies with the request
      body: JSON.stringify({ query, variables }),
    });
    return response.json();
  }
}

// Client instances
export const shopClient = new SimpleGraphQLClient('http://localhost:3000/shop-api');
export const adminClient = new SimpleGraphQLClient('http://localhost:3000/admin-api');