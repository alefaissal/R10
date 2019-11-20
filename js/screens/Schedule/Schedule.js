import React from 'react';
import {Text, Image, View, Button} from 'react-native';
import styles from './styles';

const Schedule = ({navigation}) => {
  return (
    <View>
      <Text>Schedule here test 345</Text>
      <Button
        title="Got to next section"
        onPress={() =>
          navigation.push('Session', {
            itemId: 'hello',
          })
        }
      />
    </View>
  );
};

export default Schedule;
