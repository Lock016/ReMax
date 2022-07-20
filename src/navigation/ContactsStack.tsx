import { createStackNavigator } from '@react-navigation/stack';
import { ContactsScreen } from '../screens/Contacts/ContactsScreen';
import React from 'react';
import { ContactAdd } from '../screens/Contacts/ContactAdd';
import { ContactDetails } from '../screens/Contacts/ContactDetails';
import { Contact } from '../interfaces/contactsInterfaces';


export type RootStackContactParamList = {
    ContactsScreen: undefined;
    ContactAddScreen:{
        title: string;
        contact: Contact;
    };
    ContactDetails: undefined;
    
};


const Stack = createStackNavigator<RootStackContactParamList>();

const ContactsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
            <Stack.Screen name="ContactAddScreen" initialParams={{
                title: 'Agregar Contacto'
            }} component={ContactAdd} />
            <Stack.Screen name="ContactDetails" component={ContactDetails} />

        </Stack.Navigator>
    );
}

export default ContactsStack