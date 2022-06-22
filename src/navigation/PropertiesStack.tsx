import { createStackNavigator } from '@react-navigation/stack';
import PropertiesScreen from '../screens/Properties/PropertiesScreen';
import React from 'react';

const Stack = createStackNavigator();

const PropertiesStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown:false }}
        >
            <Stack.Screen name="PropertiesScreen" component={PropertiesScreen} />
        </Stack.Navigator>
    );
}

export default PropertiesStack