import { gql } from 'apollo-boost';

export const typeDefs = gql`
  extend type Postasdf {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    published: Boolean!
    title: String!
    content: String
  }
`;

export const resolvers = {
  Mutation: {

  },
  Query: {

  },
  Subscriptions: {
  },

};