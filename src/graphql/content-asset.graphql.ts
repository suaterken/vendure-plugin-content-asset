import gql from 'graphql-tag';

export const CONTENT_ASSET = gql`
    type ContentAsset {
        id: ID!
        enabled: Boolean
        name: String
        body: String
    }
`;

export const GET_CONTENT_ASSET = gql`
    query GetContentAsset($id: ID!) {
        contentAsset(id: $id) {
            id
            enabled
            name
            body
        }
    }
`;