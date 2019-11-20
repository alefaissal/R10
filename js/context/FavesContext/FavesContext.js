import React, {Component} from 'react';
export const FavesContext = React.createContext();
import {addFave, getAllFaves, removeFav} from '../../config/models';

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  componentDidMount() {
    this.getFavedSessionIds();
  }

  getFavedSessionIds = async () => {
    try {
      const favs = await getAllFaves();
      const ids = favs.map(fav => fav[0]);
      this.setState({faveIds: ids});
    } catch (e) {
      console.log(e);
    }
  };

  addFaveSessionId = async sessionId => {
    try {
      const newFave = await addFave(sessionId);
      if (newFave) {
        this.setState({faveIds: [...this.state.faveIds, newFave.id]});
      }
      this.getFavedSessionIds();
    } catch (e) {
      console.log(e);
    }
  };

  removeFaveSessionId = async sessionId => {
    try {
      await removeFav(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSessionId: this.addFaveSessionId,
          removeFaveSessionId: this.removeFaveSessionId,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export default FavesProvider;
