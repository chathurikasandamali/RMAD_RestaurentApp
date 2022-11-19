import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Route} from '../common/Enums';
import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

const MainNavigation = () =>{
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;