import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreen } from '../screens/LoginScreen';
import DrawerComponent from '../components/DrawerComponent';
// import ContactsScreen from '../screens/Contacts/ContactsScreen';
import ContactsStack from './ContactsStack';
import PropertiesStack from './PropertiesStack';
import LocationsStack from './LocationsStack';
import RemindersStack from './RemindersStack';
import { Header } from '../components/ui/Header';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName='ContactsStack'
            screenOptions={{
                headerShown: true, // Oculta la hamburguesa
                header:()=> <Header/>
            }}
            drawerContent={(props) => <DrawerComponent { ...props } />}
        >
            <Drawer.Screen name='ContactsStack' options={{ title: 'Contactos'}} component={ContactsStack} />
            <Drawer.Screen name='PropertiesStack' options={{ title: 'Propiedades'}} component={PropertiesStack} />
            <Drawer.Screen name='LocationsStack' options={{ title: 'Ubicaciones'}} component={LocationsStack} />
            <Drawer.Screen name='RemindersStack' options={{ title: 'Recordatorios'}} component={RemindersStack} />
            <Drawer.Screen name='LoginScreen' component={LoginScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});