import { StyleSheet, Text } from 'react-native'
import { DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';

import React from 'react'

interface Props{
    icon: string,
    name: string,
    navigation: DrawerNavigationHelpers,
    state: DrawerNavigationState<ParamListBase>
    index: number
    stack: string
}

const DrawerItemComponent = ({ icon, name, navigation, state, index, stack}: Props) => {
    return(
        <DrawerItem
            icon={ ({ color }) => (
                <Icon
                    name={icon}
                    size={45}
                    color={color}
                />
            )}
            label={ ({ color}) => <Text style={{...styles.drawerItemText, color}}>{name}</Text> }
            onPress={ () => navigation.navigate(stack)}
            activeTintColor='#003DA5'
            inactiveTintColor='#000'
            activeBackgroundColor='rgba(229,229,229,.2)'
            inactiveBackgroundColor='#fff'
            focused={state.index === index}
        />
    )
}

export default DrawerItemComponent

const styles = StyleSheet.create({
    drawerItemText: {
        fontFamily: 'Gotham-Bold',
        fontSize: 20,
        marginRight: -30,
        paddingVertical: 12,
    },
});
