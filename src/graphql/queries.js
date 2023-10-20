/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPreviousIssueArchive = /* GraphQL */ `
  query GetPreviousIssueArchive($id: ID!) {
    getPreviousIssueArchive(id: $id) {
      id
      MagazineID
      Season
      Year
      Tags
      Title
      CoverLink
      PageLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPreviousIssueArchives = /* GraphQL */ `
  query ListPreviousIssueArchives(
    $filter: ModelPreviousIssueArchiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPreviousIssueArchives(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        MagazineID
        Season
        Year
        Tags
        Title
        CoverLink
        PageLink
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
