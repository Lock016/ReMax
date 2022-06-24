import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import { LoginScreen } from '../screens/LoginScreen';
import DrawerNavigation from './DrawerNavigation';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const Stack = createStackNavigator();
const NavigationStack = () => {

    const status = useSelector((state: RootState) => state.auth.status);

    if (status === 'checking') return <SplashScreen />
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
            {
                status === 'authenticated' ?
                    <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
                    :
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />

            }
            {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
        </Stack.Navigator>
    );
}

export default NavigationStack