import React, {Component} from 'react';
import {Text} from 'react-native';
import Session from './Session';
import {Query} from 'react-apollo';
import {SESSION_QUERY} from '../../apollo';

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'Session',
  };
  render() {
    // console.log(this.props.navigation.state.params.itemId);
    return (
      <Query
        query={SESSION_QUERY}
        variables={{id: this.props.navigation.state.params.itemId}}>
        {({loading, error, data}) => {
          if (loading) {
            return <Text>loading</Text>;
          }
          if (error) {
            return <Text>`Error: ${error.message}`</Text>;
          }
          return <Session session={data.Session} />;
        }}
      </Query>
    );
  }
}

export default SessionContainer;
