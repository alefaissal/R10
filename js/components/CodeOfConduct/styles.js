import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';

const styles = StyleSheet.create({
  plusItems: {
    color: colors.purple,
    fontFamily: typography.fontMain,
    margin: 10,
    fontSize: typography.baseSize,
  },
  plusDescription: {
    fontFamily: typography.fontMain,
    margin: 10,
    fontSize: typography.baseSize,
    fontWeight: '100',
  },
  flexSign: {
    flexDirection: 'row',
    alignContent: 'center',
  },
});

export default styles;
