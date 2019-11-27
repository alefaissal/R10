import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SectionList,
  Platform
} from "react-native";
import styles from "./styles";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const Schedule = ({ navigation, sessions, faveIds }) => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={sessions}
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
                        name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
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
  );
};

Schedule.propTypes = {
  sessions: PropTypes.array.isRequired,
  faveIds: PropTypes.arrayOf(PropTypes.string),
  navigation: PropTypes.object.isRequired
};

export default Schedule;
