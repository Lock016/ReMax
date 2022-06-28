import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FormikForm } from '../components/formik/FormikForm';
import { LoginForm } from '../components/Login/LoginForm';

export const LoginScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('./../assets/images/ReMax_Balloon.png')}
                    style={styles.image}
                />

                <FormikForm>
                    <LoginForm />
                </FormikForm>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    imageContainer: {
        height: '50%',
        backgroundColor: 'green',
        padding: 10,
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    }
})