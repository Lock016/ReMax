import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../../theme/globalTheme';
import { Header } from '../../components/ui/Header';
import { CardContact } from '../../components/Contacts/CardContact';
import { ButtonAdd } from '../../components/ui/ButtonAdd';

const data = {
  name: 'Johan Israel Gonzalez Vargas',
  number: '6182593051',
  email: 'jopi20101@gmail.com',
  path: 'ContactsDetails'
}

const ContactsScreen = () => {
  return (
    <View style={{flex:1}}>
      <Header />
      <Text style={globalStyles.title}>Contactos</Text>

      <CardContact
        {...data}
      />

      <ButtonAdd path={'addContact'}/>
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
