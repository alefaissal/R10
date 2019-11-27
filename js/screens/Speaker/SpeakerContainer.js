import React, { Component } from "react";
import { Text, Modal, View, Alert, TouchableHighlight } from "react-native";
import Speaker from "./Speaker";
import { Query } from "react-apollo";
import { SPEAKER_QUERY } from "../../apollo";
import Loader from "../../components/Loader";
import styles from "./styles";
import PropTypes from "prop-types";

class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  static navigationOptions = {
    title: "Speaker"
  };
  render() {
    return (
      <Query
        query={SPEAKER_QUERY}
        variables={{ id: this.props.navigation.state.params.speakerId }}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return <Loader />;
          }
          if (error) {
            return <Text>`Error: ${error.message}`</Text>;
          }

          return (
            <View style={styles.mainModalContainer}>
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
              >
                <View style={styles.mainModalContainer}>
                  <View style={styles.modalBlackOutside}>
                    <TouchableHighlight
                      onPress={() => {
                        this.props.navigation.goBack();
                      }}
                    >
                      <Text style={styles.modalWhiteTextX}>X</Text>
                    </TouchableHighlight>
                    <Text style={styles.modalWhiteText}>About the Speaker</Text>
                  </View>
                  <View style={styles.modalSpeaker}>
                    <View>
                      <Speaker speaker={data.Speaker} />
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          );
        }}
      </Query>
    );
  }
}

SpeakerContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SpeakerContainer;
