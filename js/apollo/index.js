import gql from 'graphql-tag';

export const SESSION_QUERY = gql`
  query Session($id: ID!) {
    Session(id: $id) {
      id
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
      speaker {
        name
      }
    }
  }
`;

export const ALL_CONDUCT = gql`
  query {
    allConducts {
      id
      description
      title
      order
    }
  }
`;

export const ALL_SPEAKERS = gql`
  query {
    allSpeakers {
      name
      id
      bio
      image
      session
      url
    }
  }
`;
