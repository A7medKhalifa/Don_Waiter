import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'theme/colors';
import Fonts from 'theme/fonsFamily';

export const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    borderColor: Colors().border,
    borderWidth: 1,
    backgroundColor: Colors().secWhite,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  CC: {
    fontFamily: Platform.OS == 'ios' ? 'Brandon Grotesque' : 'brandon-grotesque-black-58a8a3e824392',
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: Colors().black,
    marginTop: Platform.OS == 'android' ? -2 : 0,
    marginRight: 10
  },
  Title: {
    fontFamily: Platform.OS == 'ios' ? 'Brandon Grotesque' : 'brandon-grotesque-black-58a8a3e824392',
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 15,
    color: Colors().black
  },
  InputStyle: {
    height: 49,
    color: Colors().black,
    textTransform: 'uppercase'
  },
  error: {
    fontSize: 12,
    fontWeight: "400",
    marginTop: 5,
    textAlign: 'left',
    color: Colors().Red,
    fontFamily: Fonts.ReadexProRegular,
    textTransform: 'uppercase'
  },
});
