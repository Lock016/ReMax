import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { globalStyles } from '../theme/globalTheme'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerItemComponent from './DrawerItemComponent'
import { startLogout } from '../store/auth';
import { useAppDispatch, useAppSelector } from '../hooks';

const DrawerComponent = (props: DrawerContentComponentProps) => {

    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.auth);
    
    
    const { navigation, state } = props
    return (
        <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
            {/* User Info */}
            <View style={styles.userContainer}>
                <View>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' }}
                        style={styles.userImage}
                    />
                </View>
                <View style={styles.userInfo}>
                    <Text style={{ ...globalStyles.title, fontSize: 20 }}>{`${user?.fname}         ${user?.lname}`}</Text>
                    <Text style={styles.userCity}>Ciudad de México</Text>
                </View>
            </View>

            <DrawerItemComponent
                icon='person'
                name='Contactos'
                navigation={navigation}
                state={state}
                index={0}
                stack='ContactsStack'
            />
            <DrawerItemComponent
                icon='home'
                name='Propiedades'
                navigation={navigation}
                state={state}
                index={1}
                stack='PropertiesStack'
            />
            <DrawerItemComponent
                icon='location-on'
                name='Ubicaciones'
                navigation={navigation}
                state={state}
                index={2}
                stack='LocationsStack'
            />
            <DrawerItemComponent
                icon='speaker-notes'
                name='Recordatorios'
                navigation={navigation}
                state={state}
                index={3}
                stack='RemindersStack'
            />
            <View style={{ flex: 1 }} />
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => dispatch(startLogout())}
            >
                <Icon
                    name='logout'
                    size={45}
                    color='#4f4f4f'
                />
                <Text style={styles.logoutText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    )
}

export default DrawerComponent

const styles = StyleSheet.create({
    drawerItem: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    drawerItemText: {
        fontFamily: 'Gotham-Bold',
        fontSize: 20,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        borderTopColor: 'rgba(0,0,0,0.2)',
        borderTopWidth: 1,
        paddingVertical: 10,
        marginRight: 20
    },
    logoutText: {
        fontFamily: 'Gotham-Bold',
        fontSize: 20,
        color: '#4f4f4f',
        marginLeft: 10,
    },
    userCity: {
        fontSize: 16,
        color: '#cbcbcb',
        fontFamily: 'GothamMedium',
        marginTop: 5
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    userImage: {
        borderRadius: 50,
        height: 65,
        width: 65,
        marginLeft: 10
    },
    userInfo: {
        justifyContent: 'center',
        marginLeft: 10,
    }
})