import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../theme/globalTheme'
import React from 'react'
import { Header } from '../../components/ui/Header'

const RemindersScreen = () => {
    return(
        <View>
            <Header/>
            <Text style={globalStyles.title}>RemindersScreen</Text>
        </View>
    )
}

export default RemindersScreen

const styles = StyleSheet.create({})