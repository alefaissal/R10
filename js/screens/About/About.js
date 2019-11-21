import React from 'react';
import {Text, Image, View, ScrollView} from 'react-native';
import styles from './styles';

const About = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/r10_logo.png')}
          />
        </View>
        <Text style={styles.generalText}>
          R10 is a conference that focus on just about nay topic related to dev.
        </Text>
        <Text style={styles.heading}>Date & Venue</Text>
        <Text style={styles.generalText}>
          The R10 conference will take plavce on Friday, December 13, 2019,
          Vancouver, BC.
        </Text>
        <Text style={styles.heading}>Code of Conduct</Text>
        <Text style={styles.plusItems}>+ Purpose</Text>
        <Text style={styles.plusItems}>+ Open Source Citinzenship</Text>
        <Text style={styles.plusItems}>+ Expected Behaviour</Text>
        <Text style={styles.plusItems}>+ Unacceptable Behaviour</Text>
        <Text style={styles.plusItems}>
          + Consequences Of Unacceptable Behaviour
        </Text>
        <Text style={styles.plusItems}>
          + What To Do If You Witness Or Are Subject To Unacceptable Behaviour
        </Text>
        <Text style={styles.plusItems}>+ Scope</Text>
        <Text style={styles.plusItems}>+ Contact Information</Text>
        <Text style={styles.plusItems}>+ License and Attribution</Text>
        <Text>© Alex Faissal 2019</Text>
      </View>
    </ScrollView>
  );
};

export default About;
