import React, {Component} from 'react';
import {Text} from 'react-native';
import Speaker from './Speaker';
import {Query} from 'react-apollo';
import {ALL_SPEAKERS} from '../../apollo';
import Loader from '../../components/Loader';
import {FavesContext} from '../../context/FavesContext';

class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'Speaker',
  };
  render() {
    return (
      <Query
        query={ALL_SPEAKERS}
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
                <Speaker
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

export default SpeakerContainer;
