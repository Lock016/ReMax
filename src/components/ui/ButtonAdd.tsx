import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Nav extends StackNavigationProp<any, any> { }

interface Props {
  path: string
}

export const ButtonAdd = ({ path }: Props) => {
  const navigation = useNavigation<Nav>();
  return (
    <TouchableOpacity style={styles.button}
      activeOpacity={.9}
      onPress={() => navigation.navigate(path)}
    >
      <Icon
        name='add'
        size={40}
        color={'white'}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#003DA5',
    borderRadius: 50,
    width: 62,
    height: 62,
    position: 'absolute',
    bottom: 30,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
