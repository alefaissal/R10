import React from 'react';
import {Text, Image, View, Button, ScrollView, Platform} from 'react-native';
import styles from './styles';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

const Session = ({session}) => {
  console.log(`${session.speaker.image}`);
  return (
    <ScrollView>
      <View style={styles.sessionContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{session.location}</Text>
          {/* TODO ADD ICON on differents platforms ISO and Android*/}
          <Icon
            name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
            size={16}
            color="red"
          />
          {/* TODO END OF ADD ICON*/}
        </View>
        <Text style={styles.title}>{session.title}</Text>
        <Text style={styles.time}>
          {moment(session.startTime).format('hh:mm A')}
        </Text>
        <Text style={styles.description}>{session.description}</Text>
        <Text style={styles.presentedBy}>Presented by:</Text>
        <View style={styles.speakerContainer}>
          <Image
            style={styles.image}
            source={{
              uri: session.speaker.image,
            }}
          />
          <Text style={styles.name}>{session.speaker.name}</Text>
        </View>
        <View style={styles.button}>
          <Button title="Remove from Faves" color="white" onPress={() => ''} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Session;
