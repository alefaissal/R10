import React from "react";
import { Text, Image, View, ScrollView } from "react-native";
import styles from "./styles";
import CodeOfConduct from "../../components/CodeOfConduct";
import PropTypes from "prop-types";

const About = ({ allConducts }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/r10_logo.png")}
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
          <CodeOfConduct
            key={each.id}
            title={each.title}
            description={each.description}
          />
        ))}

        <Text>© Alex Faissal 2019</Text>
      </View>
    </ScrollView>
  );
};

About.propTypes = {
  allConducts: PropTypes.array.isRequired
};

export default About;
