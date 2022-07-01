import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components/ui/Header'
import { globalStyles } from '../../theme/globalTheme'

const PropertiesResults = () => {
    return(
        <SafeAreaView style={globalStyles.safeAreaContainer} >
            <Header/>
            <View style={globalStyles.container}>
                <Text style={globalStyles.title}>PropertiesResults</Text>
            </View>
        </SafeAreaView>
    )
}

export default PropertiesResults

const styles = StyleSheet.create({})