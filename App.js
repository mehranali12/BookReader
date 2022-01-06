import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React ,{useEffect}from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import continueReading from './src/screens/continueReading';
import forgetPassword from './src/screens/forgetPassword';
import join from './src/screens/join';
import otp from './src/screens/otp';
import reading from './src/screens/reading';
import resetPassword from './src/screens/resetPassword';
import signin from './src/screens/signin';
import signup from './src/screens/signup';
import homeTab from './src/screens/Navigation/navigation'
import RNBootSplash from "react-native-bootsplash";

const Stack = createStackNavigator();


const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });

  }, [])
  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide()}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>

        {/* <Stack.Screen name="splish" component={splish} /> */}
        <Stack.Screen name="join" component={join} />
        <Stack.Screen name="signin" component={signin} />
        <Stack.Screen name="home" component={homeTab} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="forgetPassword" component={forgetPassword} />
        <Stack.Screen name="otp" component={otp} />
        <Stack.Screen name="resetPassword" component={resetPassword} />
        <Stack.Screen name="reading" component={reading} />
        <Stack.Screen name="continueReading" component={continueReading} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({});

export default App;

//https://github.com/captainIN/splashexample/blob/main/android/app/src/main/res/layout/launch_screen.xml
