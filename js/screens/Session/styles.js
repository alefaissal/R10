import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';

const styles = StyleSheet.create({
  sessionContainer: {
    padding: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  location: {
    fontFamily: typography.fontMain,
    fontSize: 20,
    color: colors.mediumGrey,
  },
  title: {
    fontFamily: typography.fontMain,
    fontSize: 30,
    paddingBottom: 10,
    paddingTop: 10,
  },
  time: {
    fontFamily: typography.fontMain,
    color: colors.red,
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  description: {
    fontFamily: typography.fontMainLight,
    fontSize: 25,
    paddingBottom: 10,
    paddingTop: 10,
    lineHeight: 40,
  },
  presentedBy: {
    fontFamily: typography.fontMain,
    fontSize: 20,
    color: colors.mediumGrey,
    paddingBottom: 10,
    paddingTop: 30,
  },
  speakerContainer: {
    fontFamily: typography.fontMain,
    flexDirection: 'row',
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  name: {
    fontFamily: typography.fontMain,
    fontSize: 20,
    paddingLeft: 30,
  },
  button: {
    backgroundColor: colors.purple,
    borderRadius: 60,
    height: 60,
    width: 200,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
  },
});

export default styles;
