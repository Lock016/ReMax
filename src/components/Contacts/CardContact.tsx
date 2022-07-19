import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { StackNavigationProp } from '@react-navigation/stack';
import { RightSwipeActions } from './RightSwipeActions';
import { useAppDispatch } from '../../hooks';
import { startDeleteContact } from '../../store/contacts';
interface Nav extends StackNavigationProp<any, any> { }
interface Props {
  id: string;
  name: string,
  number: string
  email: string
  path: string
}

export const CardContact = ({ name, number, email, id,}: Props) => {
  const navigation = useNavigation<Nav>();
  const dispatch = useAppDispatch();

  const onDelete = () => {
    dispatch(startDeleteContact(id));
  }

  const onUpdate = () => {
    navigation.navigate('ContactAddScreen', { title: 'Editar Contacto' });
    
  }


  return (
    <Swipeable

      renderRightActions={() => <RightSwipeActions onDelete={onDelete} onUpdate={
        onUpdate
      } />}
      onSwipeableOpen={() => {}}
    >

      <TouchableOpacity style={styles.cardContainer}
        activeOpacity={.9}
        onPress={() => navigation.navigate('ContactDetails')}
      >
        <View style={styles.textContainer} >
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.numberText}>{number}</Text>
          <Text style={styles.emailText}>{email}</Text>
        </View>

        <View>
          <Icon
            name='arrow-forward-ios'
            size={30}
            color={'#003DA5'}

          />
        </View>
      </TouchableOpacity>
    </Swipeable>
  )
}
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 1,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',

  },
  nameText: {
    color: '#003DA5',
    fontFamily: 'Gotham-Bold',
    fontSize: 18,
  },
  numberText: {
    fontFamily: 'Gotham-Bold',
    fontSize: 16,
    color: '#656565',

  },
  emailText: {
    fontFamily: 'GothamBook',
    fontSize: 16,
    color: '#656565',
  },
  button: {
    flex: 1,
    alignItems: 'flex-end',
  }
});
