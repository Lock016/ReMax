import { createStackNavigator } from '@react-navigation/stack';
import RemindersScreen from '../screens/Reminders/RemindersScreen';
import React from 'react';

const Stack = createStackNavigator();

const RemindersStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown:false }}
        >
            <Stack.Screen name="RemindersScreen" component={RemindersScreen} />
        </Stack.Navigator>
    );
}

export default RemindersStack