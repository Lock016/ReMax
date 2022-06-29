import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    isActive: {
        op1: boolean,
        op2: boolean,
        op3: boolean,
    },
    setIsActive: (isActive: {
        op1: boolean,
        op2: boolean,
        op3: boolean,
    }) => void,
    op1: string,
    op2: string,
    op3: string,
}

const SwitchComponent = ({setIsActive, isActive, op1, op2, op3}: Props) => {
    return (
        <View style={ styles.switchContainer}>
            <TouchableOpacity
                onPress={ () => {
                    setIsActive({
                        op1: true,
                        op2: false,
                        op3: false,
                    })
                }}
                style={{
                    ...styles.switchItem,
                    backgroundColor: ( isActive.op1 ? '#003DA5' : '#fff'),
                    borderBottomLeftRadius: 50,
                    borderTopLeftRadius: 50,
                }}
            >
                <Text
                    style={{ 
                        ...styles.switchText 
                        , color: ( isActive.op1 ? '#fff' : '#000')
                    }}
                >{op1}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={ () => {
                    setIsActive({
                        op1: false,
                        op2: true,
                        op3: false,
                    })
                }}
                style={{
                    ...styles.switchItem,
                    backgroundColor: ( isActive.op2 ? '#003DA5' : '#fff'),
                }}
            >
                <Text
                    style={{ 
                        ...styles.switchText 
                        , color: ( isActive.op2 ? '#fff' : '#000')
                    }}
                >{op2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => {
                    setIsActive({
                        op1: false,
                        op2: false,
                        op3: true,
                    })
                }}
                style={{
                    ...styles.switchItem,
                    backgroundColor: ( isActive.op3 ? '#003DA5' : '#fff'),
                    borderBottomRightRadius: 50,
                    borderTopRightRadius: 50,
                }}
            >
                <Text
                    style={{ 
                        ...styles.switchText 
                        , color: ( isActive.op3 ? '#fff' : '#000')
                    }}
                >{op3}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SwitchComponent

const styles = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: '#003DA5',
        borderWidth: 2,
        alignSelf: 'center',
        marginVertical: 10,

    }, 
    switchItem: {
        paddingVertical: 10,
        width: '33.33%',
    },
    switchText: {
        fontSize: 18,
        fontFamily: 'GothamBook',
        textAlign: 'center',
    }
})