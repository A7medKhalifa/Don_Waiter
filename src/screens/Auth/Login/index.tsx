import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground, Platform, Text, View } from 'react-native';
import { Frame } from 'assets/Images';
import { styles } from './style';
import Form from './components/Form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import StaticLogo from 'components/Custom Icons/Logo';
import StaticMan from 'components/Custom Icons/Man';

const LoginScreen = () => {
  return (
    <>
      <SafeAreaView edges={['top']} style={styles.Container}>
        <ImageBackground source={Frame} style={styles.ImageBackground}>
          <View style={styles.LogoContainer}>
            <StaticLogo width={182} height={87} />
            <Text style={styles.Login}>LOG IN</Text>
          </View>
          <StaticMan width={200} height={281} />
        </ImageBackground>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          extraScrollHeight={Platform.OS == 'android' ? -100 : 0}
          contentContainerStyle={{ flexGrow: 1 }}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}>
          <Form />
          <View style={{ height: 20 }} />
        </KeyboardAwareScrollView>
      </SafeAreaView >
    </>
  );
};
export default LoginScreen;
