import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import { typeDefs, resolvers } from './graphql/resolvers';

import './index.css';
import App from './App';
import { ApolloClient } from 'apollo-boost';


// our prisma graphql-yoga server is on port 4000
const httpLink = new HttpLink({
  url: 'http://localhost:4000',
  // url: 'http://localhost:3000/graphql',
});


// our prisma graphql-yoga server is on port 4000
// we can use the same port aslong as the protocols are different (ws and http)
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/',
  options: {
    reconnect: true,
  },
});

const cache = new InMemoryCache();

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
// https://www.apollographql.com/docs/react/advanced/subscriptions/
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache,

  // only using subscriptions at the moment.
  // works without needed these. weird. don't understand why yet.
  // typeDefs,
  // resolvers,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);