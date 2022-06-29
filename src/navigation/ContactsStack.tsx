import { createStackNavigator } from '@react-navigation/stack';
import { ContactsScreen } from '../screens/Contacts/ContactsScreen';
import React from 'react';
import { ContactAdd } from '../screens/Contacts/ContactAdd';


const Stack = createStackNavigator();

const ContactsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
            <Stack.Screen name="ContactAddScreen" component={ContactAdd} />
        </Stack.Navigator>
    );
}

export default ContactsStack