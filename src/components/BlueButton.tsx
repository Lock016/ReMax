import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Props {
    text: string;
    onPress: () => void;
}

const BlueButton = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.blueButton}
        >
            <Text 
                style={styles.buttonText}
            >{ text }</Text>
        </TouchableOpacity>
    )
}

export default BlueButton

const styles = StyleSheet.create({
    blueButton:{
        backgroundColor: '#003DA5',
        borderRadius: 30,
        height: 50,
        width: 200,
        justifyContent: 'center',
    },
    buttonText:{
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Gotham-Bold',
        textAlign: 'center',
    }    
})