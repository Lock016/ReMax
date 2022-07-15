import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {PropertiesScreen} from '../screens/Properties/PropertiesScreen';
import PropertiesResults from '../screens/Properties/PropertiesResults';
import PropertyDetail from '../screens/Properties/PropertyDetail';


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
            <Stack.Screen name="PropertyDetail" component={PropertyDetail} />
           
        </Stack.Navigator>
    );
}

export default PropertiesStack