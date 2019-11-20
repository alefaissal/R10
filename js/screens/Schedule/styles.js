import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';

const styles = StyleSheet.create({
  time: {
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    padding: 15,
    backgroundColor: colors.lightGrey,
  },
  title: {
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    paddingBottom: 15,
  },
  location: {
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    color: colors.mediumGrey,
    borderBottomWidth: 5,
    borderBottomColor: colors.black,
  },
  eventContainer: {
    padding: 15,
  },
  button: {},
});

export default styles;
