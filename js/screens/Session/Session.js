import React from 'react';
import {Text, Image, View, Button, ScrollView, Platform} from 'react-native';
import styles from './styles';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

const Session = ({session, addFaveSessionId, removeFaveSessionId, faveIds}) => {
  return (
    <ScrollView>
      <View style={styles.sessionContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{session.location}</Text>
          {faveIds && faveIds.includes(session.id) && (
            <Icon
              name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
              size={16}
              color="red"
            />
          )}
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
          {faveIds && faveIds.includes(session.id) ? (
            <Button
              style={styles.button}
              title="Remove from Faves"
              color="white"
              onPress={() => removeFaveSessionId(session.id)}
            />
          ) : (
            <Button
              title="Add to Faves"
              color="white"
              onPress={() => addFaveSessionId(session.id)}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Session;
