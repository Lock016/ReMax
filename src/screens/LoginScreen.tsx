import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../theme/globalTheme'
import BlueButton from '../components/BlueButton';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const LoginScreen = () => {

    const { status } = useSelector((state: RootState) => state.auth);

    return (
        <View>
            <Text 
                style={globalStyles.title}
            >{status}</Text>
            <BlueButton
                text='Buscar'
                onPress={() => {}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})