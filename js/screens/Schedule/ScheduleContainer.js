import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';

const ScheduleContainer = ({navigation}) => {
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

export default ScheduleContainer;
