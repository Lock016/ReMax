import { StyleSheet, Text, View, TextInput } from 'react-native'
import { globalStyles } from '../theme/globalTheme'
import React from 'react'

interface Props {
    label: string,
}

const InputComponent = ( { label }: Props) => {
    return(
        <View style={ styles.formContainer }>
            <Text style={globalStyles.inputLabel}>{ label }</Text>
            <View style={globalStyles.inputContainer}>
                <TextInput
                    defaultValue=''
                    style={ styles.inputStyle }
                />
            </View>
        </View>
    )
}

export default InputComponent

const styles = StyleSheet.create({
    formContainer: {
        marginVertical: 10,
    },
    inputStyle: {
        fontSize: 18,
        fontFamily: 'GothamBook'
    }
})