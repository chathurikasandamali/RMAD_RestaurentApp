import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../common/Enums';
import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import MainTabNavigation from './MainTabNavigation';
import Signup from '../screens/SignUp';
import Login from '../screens/Login';
import VerificationCode from '../screens/VerificationCode';
import ResetPassword from '../screens/ResetPassword';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Route.SPLASH}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Route.WELCOME}
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Route.SIGNUP}
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Route.LOGIN}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Route.VERIFICATION_CODE}
          component={VerificationCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Route.RESET_PASSWORD}
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Route.TAB_HOME}
          component={MainTabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
