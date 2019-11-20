import gql from 'graphql-tag';

export const SESSION_QUERY = gql`
  query Session($id: ID!) {
    Session(id: $id) {
      location
      title
      startTime
      description
      speaker {
        image
        name
      }
    }
  }
`;

export const SCHEDULE_QUERY = gql`
  query {
    allSessions {
      id
      startTime
      title
      location
    }
  }
`;
