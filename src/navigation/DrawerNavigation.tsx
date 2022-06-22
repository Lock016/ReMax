import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreen } from '../screens/LoginScreen';
import ContactsScreen from '../screens/Contacts/ContactsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName='ContactsScreen'>
            <Drawer.Screen name='LoginScreen' component={LoginScreen} />
            <Drawer.Screen name='ContactsScreen' component={ContactsScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
