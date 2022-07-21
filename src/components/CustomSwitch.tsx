import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    value: string,
    onValueChange: (value: string) => void,
    options: string[],
}

const CustomSwitch = ({ onValueChange, value, options }: Props) => {

    const onPress = (option: string) => {
        onValueChange(option)
    }

    return (
        <View style={styles.switchContainer}>
            <TouchableOpacity
                onPress={() => onPress(options[0])}
                style={{
                    ...styles.switchItem,
                    backgroundColor: (value === options[0] ? '#003DA5' : '#fff'),
                    borderBottomLeftRadius: 50,
                    borderTopLeftRadius: 50,
                }}
            >
                <Text
                    style={{
                        ...styles.switchText
                        , color: (value === options[0] ? '#fff' : '#000')
                    }}
                >{options[0]}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onPress(options[1])}
                style={{
                    ...styles.switchItem,
                    backgroundColor: (value === options[1] ? '#003DA5' : '#fff'),
                  
                }}
            >
                <Text
                    style={{
                        ...styles.switchText
                        , color: (value === options[1] ? '#fff' : '#000')
                    }}
                >{options[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onPress(options[2])}
                style={{
                    ...styles.switchItem,
                    backgroundColor: (value === options[2] ? '#003DA5' : '#fff'),
                    borderBottomRightRadius: 50,
                    borderTopRightRadius: 50,
                }}
            >
                <Text
                    style={{
                        ...styles.switchText
                        , color: (value === options[2] ? '#fff' : '#000')
                    }}
                >{options[2]}</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default CustomSwitch

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