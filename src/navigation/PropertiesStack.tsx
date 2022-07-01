import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {PropertiesScreen} from '../screens/Properties/PropertiesScreen';
import PropertiesResults from '../screens/Properties/PropertiesResults';


const Stack = createStackNavigator();

const PropertiesStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ 
                headerShown:false,
             }}
        >
            <Stack.Screen name="PropertiesScreen" component={PropertiesScreen} />
            <Stack.Screen name="PropertiesResults" component={PropertiesResults} />
           
        </Stack.Navigator>
    );
}

export default PropertiesStack