import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';
import Schedule from './Schedule';
import {Query} from 'react-apollo';
import {SCHEDULE_QUERY} from '../../apollo';
import {formatSessionData} from '../../lib/helpers';
import Loader from '../../components/Loader';

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
            <Schedule
              navigation={this.props.navigation}
              sessions={ordSessions}
            />
          );
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
