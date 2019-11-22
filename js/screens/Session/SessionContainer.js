import React, {Component} from 'react';
import {Text} from 'react-native';
import Session from './Session';
import {Query} from 'react-apollo';
import {SESSION_QUERY} from '../../apollo';
import Loader from '../../components/Loader';
import {FavesContext} from '../../context/FavesContext';

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'Session',
  };
  render() {
    return (
      <Query
        query={SESSION_QUERY}
        variables={{id: this.props.navigation.state.params.itemId}}>
        {({loading, error, data}) => {
          if (loading) {
            return <Loader />;
          }
          if (error) {
            return <Text>`Error: ${error.message}`</Text>;
          }
          return (
            <FavesContext.Consumer>
              {({addFaveSessionId, removeFaveSessionId, faveIds}) => (
                <Session
                  session={data.Session}
                  addFaveSessionId={addFaveSessionId}
                  removeFaveSessionId={removeFaveSessionId}
                  faveIds={faveIds}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

export default SessionContainer;
