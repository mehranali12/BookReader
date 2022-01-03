import { StyleSheet } from 'react-native';
import { FONTS } from '../constants/fonts';

const GolbalStyle = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#F2F1F2",
  },
  loginButton: {
    borderRadius: 30,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 30,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
  },

});
const TextStyle = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontFamily: FONTS.Regular,
  },
  h2: {
    fontSize: 22,
    fontFamily: FONTS.Regular,
  },
  h3: {
    fontSize: 18,
    fontFamily: FONTS.Regular,
  },
  h5: {
    fontSize: 16,
    fontFamily: FONTS.Regular,
  },
  h5: {
    fontSize: 14,
    fontFamily: FONTS.Regular,
  },
  h6: {
    fontSize: 12,
    fontFamily: FONTS.Regular,
  },
  h7: {
    fontSize: 10,
    fontFamily: FONTS.Regular,
  },


})
export { GolbalStyle, TextStyle };
