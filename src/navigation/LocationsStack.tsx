import { createStackNavigator } from '@react-navigation/stack';
import LocationsScreen from '../screens/Locations/LocationsScreen';
import React from 'react';


const Stack = createStackNavigator();

const LocationsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown:false }}
        >
            <Stack.Screen name="LocationsScreen" component={LocationsScreen} />
        </Stack.Navigator>
    );
}

export default LocationsStack