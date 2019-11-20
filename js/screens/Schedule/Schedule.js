import React from 'react';
import {
  Text,
  Image,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import moment from 'moment';

const Schedule = ({navigation, data}) => {
  console.log(data);
  return (
    <ScrollView>
      {data.map(each => (
        <View key={each.id}>
          <Text style={styles.time}>
            {moment(each.title).format('hh:mm A')}
          </Text>
          {each.data.map(event => (
            <View key={event.id} style={styles.eventContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.push('Session', {
                    itemId: event.id,
                  })
                }>
                <View>
                  <Text style={styles.title}>{event.title}</Text>
                  <Text style={styles.location}>{event.location}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default Schedule;
