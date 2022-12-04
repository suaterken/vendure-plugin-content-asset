export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ContentAsset = {
  __typename?: 'ContentAsset';
  body?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  contentAsset?: Maybe<ContentAsset>;
};


export type QueryContentAssetArgs = {
  id: Scalars['ID'];
};

export type GetContentAssetQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetContentAssetQuery = { __typename?: 'Query', contentAsset?: { __typename?: 'ContentAsset', id: string, enabled?: boolean | null, name?: string | null, body?: string | null } | null };
