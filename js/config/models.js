import AsyncStorage from '@react-native-community/async-storage';

export const addFave = async favId => {
  try {
    return await AsyncStorage.setItem(
      `${favId}`,
      JSON.stringify({id: favId, faved_on: new Date()}),
    );
  } catch (e) {
    console.log(e);
    return false;
  }
};
export const getAllFaves = async () => {
  let values = [];
  try {
    const keys = await AsyncStorage.getAllKeys();
    values = await AsyncStorage.multiGet(keys);
    return values.filter(value => value[1].includes('faved_on'));
    //TODO try return values only intead of filter
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeFav = async favId => {
  try {
    const fav = await AsyncStorage.removeItem(`${favId}`);
    return fav;
  } catch (e) {
    console.log(e);
    return false;
  }
};
