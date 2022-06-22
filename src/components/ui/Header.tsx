import React from 'react';
import { Dimensions, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

interface Nav extends DrawerNavigationProp<any, any> { }
const windowWidth = Dimensions.get('window').width;


export const Header = () => {

    const navigation = useNavigation<Nav>()
    return (
        <View style={styles.headerContainer} >
            <TouchableOpacity
                activeOpacity={.7}
                style={styles.button}
                onPress={() => navigation.toggleDrawer()}

            >
                <Icon
                    name='menu'
                    size={60}
                    color={'red'}
                />
            </TouchableOpacity>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/images/splash.png')}
                    style={styles.image}
                />
            </View>
            <View style={{ flex: 1 }} />
        </View>
    )
}
const styles = StyleSheet.create({

    headerContainer: {
        height: 60,
        width: windowWidth,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    button: {
        width: 120,
    },
    imageContainer: {
        marginTop: 10,
        height: 35,
        width: 200,
    },
    image: {
        width: undefined,
        resizeMode: 'contain',
        height: '100%',
    }
});

