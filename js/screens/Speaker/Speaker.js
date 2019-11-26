import React from 'react';
import {Text, Image, View, Button, Linking, Platform} from 'react-native';
import styles from './styles';
import {colors} from '../../config/styles';

const Speaker = ({speaker}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.nameImage}>
        <Image
          style={styles.image}
          source={{
            uri: speaker.image,
          }}
        />
        <Text style={styles.name}>{speaker.name}</Text>
      </View>
      <Text style={styles.bio}>{speaker.bio}</Text>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Read More in Wikipedia"
          color={Platform.OS === 'ios' ? colors.white : colors.purple}
          onPress={() => Linking.openURL(speaker.url)}
        />
      </View>
    </View>
  );
};

export default Speaker;
