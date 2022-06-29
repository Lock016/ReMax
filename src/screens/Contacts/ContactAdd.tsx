import React from 'react'
import { View, Text, ScrollView, } from 'react-native'
import { Header } from '../../components/ui/Header'
import { globalStyles } from '../../theme/globalTheme'
import * as yup from 'yup'
import { Formik, } from 'formik'
import { CustomInput } from '../../components/ui/CustomInput'

export const ContactAdd = () => {



    return (
        <View style={globalStyles.safeAreaContainer}>
            <Header backButton={true} />
            <ScrollView
                style={globalStyles.container}
                showsVerticalScrollIndicator={false}
            >
                <Text style={globalStyles.title}>Crear Contacto</Text>

                <Formik
                    initialValues={{
                        name: '',
                        lname: '',
                        email: '',
                        phone: '',
                        office: '',
                        origin: '',
                        agent: '',
                        state: '',
                        type: '',
                        notes: ''
                    }}
                    enableReinitialize={true}
                    onSubmit={values => console.log(values)}
                    validationSchema={
                        yup.object({
                            name: yup.string()
                                .required('Nombre requerido')
                                .max(30, 'Nombre muy largo'),
                            lname: yup.string()
                                .required('Apellido requerido')
                                .max(30, 'Apellido muy largo'),
                            email: yup.string()
                                .required('Email requerido')
                                .email('Email invalido'),
                            phone: yup.string()
                                .required('Telefono requerido')
                                .matches(/^[0-9]{10}$/, 'Telefono invalido')
                                .min(10, 'Telefono invalido'),
                            office: yup.string()
                                .required('Oficina requerida'),
                            origin: yup.string()
                                .required('Origen requerida'),
                            agent: yup.string()
                                .required('Agente requerido'),
                            state: yup.string()
                                .required('Estado requerido'),
                            type: yup.string()
                                .required('Tipo requerido'),
                            notes: yup.string()
                                .required('Notas requeridas')

                        })
                    }

                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View style={globalStyles.formContainer}>

                            <CustomInput
                                touched={touched.name}
                                label="Nombre"
                                errors={errors.name}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                            />
                            <CustomInput
                                touched={touched.lname}
                                label="Apellido"
                                errors={errors.lname}
                                onChangeText={handleChange('lname')}
                                onBlur={handleBlur('lname')}
                                value={values.lname}
                            />
                            <CustomInput
                                touched={touched.email}
                                label="Email"
                                errors={errors.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            <CustomInput
                                touched={touched.phone}
                                label="Telefono"
                                errors={errors.phone}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                keyboardType="numeric"
                            />
                            <CustomInput

                                touched={touched.office}
                                label="Oficina"
                                errors={errors.office}
                                onChangeText={handleChange('office')}
                                onBlur={handleBlur('office')}
                                value={values.office}
                            />
                            <CustomInput

                                touched={touched.origin}
                                label="Origen"
                                errors={errors.origin}
                                onChangeText={handleChange('origin')}
                                onBlur={handleBlur('origin')}
                                value={values.origin}
                            />
                            <CustomInput

                                touched={touched.agent}
                                label="Agente"
                                errors={errors.agent}
                                onChangeText={handleChange('agent')}
                                onBlur={handleBlur('agent')}
                                value={values.agent}
                            />
                            <CustomInput

                                touched={touched.state}
                                label="Estado"
                                errors={errors.state}
                                onChangeText={handleChange('state')}
                                onBlur={handleBlur('state')}
                                value={values.state}
                            />
                            <CustomInput

                                touched={touched.type}
                                label="Tipo"
                                errors={errors.type}
                                onChangeText={handleChange('type')}
                                onBlur={handleBlur('type')}
                                value={values.type}
                            />
                            <CustomInput
                                bigger={true}
                                touched={touched.notes}
                                label="Notas"
                                errors={errors.notes}
                                onChangeText={handleChange('notes')}
                                onBlur={handleBlur('notes')}
                                value={values.notes}
                                numberOfLines={6}
                                multiline
                            />






                        </View>
                    )}
                </Formik>


            </ScrollView>
        </View>
    )
}
