import gql from 'graphql-tag';

export const schema = gql`
  type ContentAsset {
    id: ID!
    enabled: Boolean
    name: String
    body: String
  }

  extend type Query {
    contentAsset(id: ID!): ContentAsset
  }
`;