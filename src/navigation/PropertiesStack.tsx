import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {PropertiesScreen} from '../screens/Properties/PropertiesScreen';


const Stack = createStackNavigator();

const PropertiesStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ 
                headerShown:false,
             }}
        >
            <Stack.Screen name="PropertiesScreen" component={PropertiesScreen} />
           
        </Stack.Navigator>
    );
}

export default PropertiesStack