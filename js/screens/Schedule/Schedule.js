import React from 'react';
import {
  Text,
  Image,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
} from 'react-native';
import styles from './styles';
import moment from 'moment';

const Schedule = ({navigation, sessions}) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={sessions}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View>
              <View key={item.id} style={styles.itemContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    if (item.speaker) {
                      return navigation.push('Session', {
                        itemId: item.id,
                      });
                    }
                  }}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.time}>{moment(title).format('hh:mm A')}</Text>
          )}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Schedule;
