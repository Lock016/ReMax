import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { store } from './src/store';
import { Provider } from 'react-redux';
import SplashScreen from './src/screens/SplashScreen';

export const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer
                
            >
                <DrawerNavigation />
                {/* <SplashScreen /> */}
            </NavigationContainer>
        </Provider>
    );
};
