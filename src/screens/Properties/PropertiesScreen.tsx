import { Button, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../theme/globalTheme'
import React from 'react'
import { Header } from '../../components/ui/Header';          


export const PropertiesScreen = () => {

    return(
        <View style={{flex:1}} >
            <Header/>
           <Text>Hola mundo</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    
})