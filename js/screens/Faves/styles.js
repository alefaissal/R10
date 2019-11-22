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
    padding: 15,
  },
  location: {
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    color: colors.mediumGrey,
    padding: 15,
  },
  eventContainer: {
    padding: 15,
  },
  flexHeart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
});

export default styles;
