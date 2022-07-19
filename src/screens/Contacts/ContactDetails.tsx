import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { globalStyles } from '../../theme/globalTheme'
import { Header } from '../../components/ui/Header'
import { useAppSelector } from '../../hooks'

export const ContactDetails = () => {

  const { activeContact } = useAppSelector(state => state.contacts);
  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
    <Header backButton={true} />
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Contacto</Text>

     
     
    </View>
  </SafeAreaView>
  )
}
