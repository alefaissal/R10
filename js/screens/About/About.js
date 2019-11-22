import React from 'react';
import {Text, Image, View, ScrollView} from 'react-native';
import styles from './styles';

const About = ({allConducts}) => {
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
        {allConducts.map(each => (
          <View key={each.id}>
            <Text style={styles.plusItems}>{each.title}</Text>
            <Text style={styles.plusDescription}>{each.description}</Text>
          </View>
        ))}

        <Text>© Alex Faissal 2019</Text>
      </View>
    </ScrollView>
  );
};

export default About;
