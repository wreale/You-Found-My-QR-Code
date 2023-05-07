import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://you-found-my-qr-code.local/graphql',
  cache: new InMemoryCache()
});

export default client;
