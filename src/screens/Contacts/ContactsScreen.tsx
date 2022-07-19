import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../../theme/globalTheme';
import { Header } from '../../components/ui/Header';
import { CardContact } from '../../components/Contacts/CardContact';
import { ButtonAdd } from '../../components/ui/ButtonAdd';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { startGettingContacts } from '../../store/contacts';
import { ActivityLoader } from '../../components/ui/ActivityLoader';


export const ContactsScreen = () => {

  const dispatch = useAppDispatch();


  const { contacts, loading } = useAppSelector(state => state.contacts);

  useEffect(() => {
    dispatch(startGettingContacts())
  }, []);




  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <Header />
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Contactos</Text>
        {
          loading ?
            <ActivityLoader  /> :
            <>
              <FlatList
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
                data={contacts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CardContact {...item} />}
              />
              <ButtonAdd path={'ContactAddScreen'} />
            </>
        }
      </View>
    </SafeAreaView>
  );
}
       


const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    marginTop: 10,
  }
  
});
