import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { globalStyles } from '../../theme/globalTheme';
import { Header } from '../../components/ui/Header';
import { CardContact } from '../../components/Contacts/CardContact';
import { ButtonAdd } from '../../components/ui/ButtonAdd';

import { useAppSelector } from '../../hooks/hooks';

const data = [
  {
    id: 1,
    name: 'Johan Israel Gonzalez Vargas',
    number: '6182593051',
    email: 'jopi20101@gmail.com',
    path: 'ContactsDetails'
  },
  {
    id: 2,
    name: 'Johan Israel Gonzalez Vargas',
    number: '6182593051',
    email: 'jopi20101@gmail.com',
    path: 'ContactsDetails'
  },
  {
    id: 3,
    name: 'Johan Israel Gonzalez Vargas',
    number: '6182593051',
    email: 'jopi20101@gmail.com',
    path: 'ContactsDetails'
  },
  {
    id: 4,
    name: 'Johan Israel Gonzalez Vargas',
    number: '6182593051',
    email: 'jopi20101@gmail.com',
    path: 'ContactsDetails'
  },
  {
    id: 5,
    name: 'Johan Israel Gonzalez Vargas',
    number: '6182593051',
    email: 'jopi20101@gmail.com',
    path: 'ContactsDetails'
  },
  {
    id: 6,
    name: 'Johan Israel Gonzalez Vargas',
    number: '6182593051',
    email: 'jopi20101@gmail.com',
    path: 'ContactsDetails'
  },

]

export const ContactsScreen = () => {

  
  

  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <Header />
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Contactos</Text>
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CardContact {...item} />}
        />
        <ButtonAdd path={'ContactAddScreen'} />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    marginTop: 10,
  }
});
