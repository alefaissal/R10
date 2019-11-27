import React, { Component } from "react";
import { Text } from "react-native";
import About from "./About";
import { Query } from "react-apollo";
import { ALL_CONDUCT } from "../../apollo";
import Loader from "../../components/Loader";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
      <Query query={ALL_CONDUCT}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loader />;
          }
          if (error) {
            return <Text>`Error: ${error.message}`</Text>;
          }

          return <About allConducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
