import React from "react";
import {
  Text,
  Image,
  View,
  Button,
  ScrollView,
  Platform,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../config/styles";
import PropTypes from "prop-types";

const Session = ({
  navigation,
  session,
  addFaveSessionId,
  removeFaveSessionId,
  faveIds
}) => {
  return (
    <ScrollView>
      <View style={styles.sessionContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{session.location}</Text>
          {faveIds && faveIds.includes(session.id) && (
            <Icon
              name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
              size={16}
              color="red"
            />
          )}
        </View>
        <Text style={styles.title}>{session.title}</Text>
        <Text style={styles.time}>
          {moment(session.startTime).format("hh:mm A")}
        </Text>
        <Text style={styles.description}>{session.description}</Text>
        <Text style={styles.presentedBy}>Presented by:</Text>
        <View style={styles.speakerContainer}>
          <Image
            style={styles.image}
            source={{
              uri: session.speaker.image
            }}
          />
          <TouchableOpacity
            onPress={() => {
              if (session.speaker) {
                return navigation.push("Speaker", {
                  speakerId: session.speaker.id
                });
              }
            }}
          >
            <Text style={styles.name}>{session.speaker.name}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          {faveIds && faveIds.includes(session.id) ? (
            <Button
              style={styles.button}
              title="Remove from Faves"
              color={Platform.OS === "ios" ? colors.white : colors.purple}
              onPress={() => removeFaveSessionId(session.id)}
            />
          ) : (
            <Button
              title="Add to Faves"
              color={Platform.OS === "ios" ? colors.white : colors.purple}
              width="200"
              onPress={() => addFaveSessionId(session.id)}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

Session.propTypes = {
  session: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.object,
    startTime: PropTypes.string,
    title: PropTypes.string
  }),
  faveIds: PropTypes.arrayOf(PropTypes.string),
  addFaveSession: PropTypes.func,
  removeFaveSession: PropTypes.func,
  navigation: PropTypes.object.isRequired
};

export default Session;
