import React, { Component } from "react";
import Faves from "./Faves";
import { Text } from "react-native";
import { Query } from "react-apollo";
import { SCHEDULE_QUERY } from "../../apollo";
import Loader from "../../components/Loader";
import { FavesContext } from "../../context/FavesContext";
import PropTypes from "prop-types";
class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Faves"
  };
  render() {
    return (
      <Query query={SCHEDULE_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loader />;
          }
          if (error) {
            return <Text>`Error: ${error.message}`</Text>;
          }
          return (
            <FavesContext.Consumer>
              {({ faveIds }) => (
                <Faves
                  sessions={data.allSessions}
                  faveIds={faveIds}
                  navigation={this.props.navigation}
                  // sessions={ordSessions}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

FavesContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default FavesContainer;
