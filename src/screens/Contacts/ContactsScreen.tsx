import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { globalStyles } from '../../theme/globalTheme';
import { Header } from '../../components/ui/Header';
import { CardContact } from '../../components/Contacts/CardContact';
import { ButtonAdd } from '../../components/ui/ButtonAdd';

const data = [
  {
    id: 1,
    name: 'Johan Israel Gonzalez Vargas',
    number: '6182593051',
    email: 'jopi20101@gmail.com',
    path: 'ContactsDetails'
  }
]

export const ContactsScreen = () => {
  return (
    <SafeAreaView style={ globalStyles.safeAreaContainer }>
      <Header />
      <View style={ globalStyles.container }>
        <Text style={globalStyles.title}>Contactos</Text>

        <CardContact
          {...data[0]}
        />

        <ButtonAdd path={'ContactAddScreen'} />

      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({});
