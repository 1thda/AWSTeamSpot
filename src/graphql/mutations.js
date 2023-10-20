/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPreviousIssueArchive = /* GraphQL */ `
  mutation CreatePreviousIssueArchive(
    $input: CreatePreviousIssueArchiveInput!
    $condition: ModelPreviousIssueArchiveConditionInput
  ) {
    createPreviousIssueArchive(input: $input, condition: $condition) {
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
export const updatePreviousIssueArchive = /* GraphQL */ `
  mutation UpdatePreviousIssueArchive(
    $input: UpdatePreviousIssueArchiveInput!
    $condition: ModelPreviousIssueArchiveConditionInput
  ) {
    updatePreviousIssueArchive(input: $input, condition: $condition) {
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
export const deletePreviousIssueArchive = /* GraphQL */ `
  mutation DeletePreviousIssueArchive(
    $input: DeletePreviousIssueArchiveInput!
    $condition: ModelPreviousIssueArchiveConditionInput
  ) {
    deletePreviousIssueArchive(input: $input, condition: $condition) {
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
