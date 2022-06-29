import React from 'react'
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { InitialValues } from '../interfaces/InitialValues';
import * as Yup from "yup";
import { Formik, FormikProps } from 'formik';
import LinearGradient from 'react-native-linear-gradient';

export const LoginScreen = () => {

    const initialValues: InitialValues = { email: '', password: '' };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email invalido')
            .required('Email requerido'),
        password: Yup.string()
            .min(6, 'Contraseña muy corta')
            .required('Contraseña requerida'),
    })


    const handleSubmit = (values: InitialValues) => {
        console.log(values);
    }

    return (
        <LinearGradient
            style={styles.linearGradient}
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            colors={['#003DA5', '#003DA5B3']}
            locations={[.45, 1.3]}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('./../assets/images/ReMax_Balloon.png')}
                        style={styles.image}
                    />
                </View>

                <View
                    style={styles.formContainer}
                >
                    <Formik
                        initialValues={initialValues}
                        enableReinitialize={true}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ handleChange, values }: FormikProps<InitialValues>) => (
                            <>
                                <View style={styles.inputsContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email"
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="**********"
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                        secureTextEntry={true}
                                    />
                                </View>

                                <TouchableOpacity
                                    style={styles.submitButton}
                                    activeOpacity={.8}>
                                    <Text
                                        style={styles.submitButtonText}
                                    >Iniciar sesión</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
                </View>
            </View>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer: {
        height: '45%',
        padding: 10,
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    formContainer: {
        height: '45%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    inputsContainer: {
        width: '80%',
        height: '50%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 10,
        fontSize: 20,
    },
    submitButton: {
        height: 50,
        width: '65%',
        backgroundColor: '#DC1C2E',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    submitButtonText: {

        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }


})