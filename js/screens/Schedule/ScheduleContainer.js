import React, {Component} from 'react';
import {Text} from 'react-native';
import Schedule from './Schedule';
import {Query} from 'react-apollo';
import {SCHEDULE_QUERY} from '../../apollo';
import {formatSessionData} from '../../lib/helpers';
import Loader from '../../components/Loader';
import {FavesContext} from '../../context/FavesContext';

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
  };

  render() {
    return (
      <Query query={SCHEDULE_QUERY}>
        {({loading, error, data}) => {
          if (loading) {
            return <Loader />;
          }
          if (error) {
            return <Text>`Error: ${error.message}`</Text>;
          }
          let ordSessions = formatSessionData(data.allSessions);
          return (
            <FavesContext.Consumer>
              {({faveIds}) => (
                <Schedule
                  navigation={this.props.navigation}
                  sessions={ordSessions}
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

export default ScheduleContainer;
