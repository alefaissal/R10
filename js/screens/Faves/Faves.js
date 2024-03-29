import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SectionList,
  Platform
} from "react-native";
import styles from "./styles";
import moment from "moment";
import { formatSessionData } from "../../lib/helpers";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const Faves = ({ navigation, sessions, faveIds }) => {
  let favSessions = [];

  faveIds.forEach(id => {
    let temp = sessions.find(session => session.id === id);
    favSessions.push(temp);
  });
  favSessions = formatSessionData(favSessions);

  return (
    <ScrollView>
      <View style={styles.container}>
        <SectionList
          sections={favSessions}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View>
              <View key={item.id} style={styles.itemContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    if (item.speaker) {
                      return navigation.push("Session", {
                        itemId: item.id
                      });
                    }
                  }}
                >
                  <View>
                    <View style={styles.flexHeart}>
                      <Text style={styles.title}>{item.title}</Text>
                      {faveIds && faveIds.includes(item.id) && (
                        <Icon
                          name={
                            Platform.OS === "ios" ? "ios-heart" : "md-heart"
                          }
                          size={16}
                          color="red"
                        />
                      )}
                    </View>
                    <Text style={styles.location}>{item.location}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.time}>{moment(title).format("hh:mm A")}</Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

Faves.propTypes = {
  sessions: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.object,
    startTime: PropTypes.string,
    title: PropTypes.string
  }),
  faveIds: PropTypes.arrayOf(PropTypes.string),
  navigation: PropTypes.object.isRequired
};
export default Faves;
