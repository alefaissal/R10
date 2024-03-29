import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  generalText: {
    fontSize: typography.baseSize,
    color: colors.black,
    fontFamily: typography.fontMainLight,
    margin: 10,
  },
  image: {
    resizeMode: 'contain',
    width: 300,
    height: 75,
    margin: 30,
  },
  imageContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontFamily: typography.fontMain,
    margin: 10,
  },
});

export default styles;
