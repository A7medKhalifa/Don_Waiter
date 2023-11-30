import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'theme/colors';
import Fonts from 'theme/fonsFamily';
import { theme } from 'theme/sizes';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors().white,
    marginTop: 10
  },
  ImageBackground: {
    height: 270,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  LogoContainer: {
    marginLeft: 10,
    alignItems: 'center',
    paddingTop: 20
  },
  Login: {
    fontFamily: Platform.OS == 'ios' ? Fonts.Main : 'Mie Goreng Regular',
    fontSize: 96,
    color: Colors().Red,
    textTransform: 'uppercase',
    marginTop: 10
  },
  InputsContainer: {
    paddingHorizontal: theme.sizeActivity.mm,
  },
  button: {
    marginTop: 40
  }
});
