import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { globalStyles } from '../theme/globalTheme'
import React from 'react'

const DrawerComponent = ( { navigation }: DrawerContentComponentProps) => {
    return(
        <DrawerContentScrollView>
            {/* User Info */}
            <View style={ styles.userContainer}>
                <View>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'}}
                        style={ styles.userImage }
                    />
                </View>
                <View style={ styles.userInfo }>
                    <Text style={{ ...globalStyles.title, fontSize: 20}}>Damiany Rosales</Text>
                    <Text style={ styles.userCity}>Ciudad de México</Text>
                </View>
            </View>
            {/* Drawer Elements */}
            <TouchableOpacity
                onPress={ () => navigation.navigate('ContactsStack')}
                style={ styles.drawerItem }
            >
                <Text>Contactos</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => navigation.navigate('PropertiesStack')}
                style={ styles.drawerItem }
            >
                <Text>Propiedades</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => navigation.navigate('LocationsStack')}
                style={ styles.drawerItem }
            >
                <Text>Ubicaciones</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => navigation.navigate('RemindersStack')}
                style={ styles.drawerItem }
            >
                <Text>Recordatorios</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => navigation.navigate('LoginScreen')}
                style={ styles.drawerItem }
            >
                <Text>Login pal cruz</Text>
            </TouchableOpacity>

        </DrawerContentScrollView>
    )
}

export default DrawerComponent

const styles = StyleSheet.create({
    drawerItem: {
        marginVertical: 10,
        
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