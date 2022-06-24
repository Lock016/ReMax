import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../theme/globalTheme'
import BlueButton from '../components/BlueButton';
import { useDispatch } from 'react-redux';

export const LoginScreen = () => {
    
    return (
        <View>
            <Text
                style={globalStyles.title}
            >login</Text>
            <BlueButton
                text='Buscar'
                onPress={() => console.log('first button')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})