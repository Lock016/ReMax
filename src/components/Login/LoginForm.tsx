import React, { Fragment } from 'react'
import { StyleSheet, TextInput, View } from 'react-native';


interface Data {
    values: { email: string, password: string },
    handleChange: () => void,
    handleBlur: () => void,
    errors: [], 
}

export const LoginForm = (data: Data) => {
    console.log(data)
    const { values,
        handleChange,
        handleBlur } = data
    return (
        <Fragment>
            <TextInput
                name={values.email}
                placeholder="Ingrese su correo"
                style={styles.input}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
            />
        </Fragment>
    )
}

const styles = StyleSheet.create({
    input: {
    }
})

