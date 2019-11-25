import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';

const styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
  },
  nameImage: {
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 90,
  },
  name: {
    fontFamily: typography.fontMain,
    fontSize: 25,
    margin: 20,
  },
  bio: {
    lineHeight: 25,
  },
  button: {
    backgroundColor: colors.purple,
    borderRadius: 45,
    height: 45,
    width: 250,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
  },
  mainModalContainer: {
    marginTop: 40,
    backgroundColor: colors.black,
  },
  modalBlackOutside: {
    backgroundColor: colors.black,
    // height: 150,
    margin: 10,
    flexDirection: 'row',
  },
  modalWhiteTextX: {
    color: colors.white,
    fontFamily: typography.fontMain,
    fontSize: 20,
    marginLeft: 10,
    width: 30,
  },
  modalWhiteText: {
    color: colors.white,
    fontFamily: typography.fontMain,
    textAlign: 'center',
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  modalSpeaker: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
    paddingBottom: 400,
  },
});

export default styles;
