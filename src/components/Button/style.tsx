import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'theme/colors';
import Fonts from 'theme/fonsFamily';

export const styles = StyleSheet.create({
  Container: {
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors().Red,
    marginBottom: 10,
    flexDirection: 'row',
  },
  Title: {
    fontFamily: Platform.OS == 'ios' ? 'Brandon Grotesque' : 'brandon-grotesque-black-58a8a3e824392',
    textTransform: 'uppercase',
    marginRight: 7,
    fontWeight:'500'
  },
  Loader: {
    width: 85,
    height: 40
  }
});
