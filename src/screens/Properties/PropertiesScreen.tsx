import { Button, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import { globalStyles } from '../../theme/globalTheme'
import { Header } from '../../components/ui/Header';  
import InputComponent from '../../components/InputComponent';        
import React from 'react'


export const PropertiesScreen = () => {

    return(
        <SafeAreaView style={globalStyles.safeAreaContainer} >
            <Header/>
            <View style={globalStyles.container}>
                <Text style={globalStyles.title}>Propiedades</Text>

                <InputComponent
                    label="Precio"
                />
                <InputComponent
                    label="Tamaño"
                />
                <InputComponent
                    label="Oficina"
                />
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    
    
})