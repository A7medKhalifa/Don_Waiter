import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import LoginScreen from 'screens/Auth/Login'
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { Store } from 'store/store';
import RedeemRewardScreen from 'screens/App/Redeem Reward';
import { NavigationContainer } from '@react-navigation/native';
import SelectTypeScreen from 'screens/App/Main select';
import RootStackScreens from 'src/Navigation';

const App = () => {
  return (
    <>
      <Provider store={Store().store}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
          {/* <NavigationContainer>
            <SelectTypeScreen />
          </NavigationContainer> */}
          <RootStackScreens />
        </SafeAreaProvider>
        <Toast topOffset={50} />
      </Provider>
    </>
  )
}

export default App