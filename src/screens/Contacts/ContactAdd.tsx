import React, { useEffect } from 'react'
import { View, Text, ScrollView, } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackContactParamList } from '../../navigation/ContactsStack'
import { Formik, } from 'formik'
import * as yup from 'yup'
import { globalStyles } from '../../theme/globalTheme'
import { Header } from '../../components/ui/Header'
import { CustomInput } from '../../components/ui/CustomInput'
import { Picker } from '@react-native-picker/picker'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { startAddingContact, startGettingOffices, startGettingOrigins } from '../../store/contacts'
import BlueButton from '../../components/BlueButton'

interface Props extends StackScreenProps<RootStackContactParamList, 'ContactAddScreen'> { }
export const ContactAdd = ({ route }: Props) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(startGettingOffices())
        dispatch(startGettingOrigins())
    }, [])
    const { offices, origins } = useAppSelector(state => state.contacts)
    const { title } = route.params;

    return (
        <View style={globalStyles.safeAreaContainer}>
            <Header backButton={true} />
            <ScrollView
                style={globalStyles.container}
                showsVerticalScrollIndicator={false}
            >
                <Text style={globalStyles.title}>{title}</Text>

                <Formik
                    initialValues={{
                        fname: '',
                        lname: '',
                        email: '',
                        cellphone: '',
                        office: 0,
                        origin: 0,
                        status: false,
                        notes: ''
                    }}
                    enableReinitialize={true}
                    onSubmit={(values) => {
                        console.log(values)
                        dispatch(startAddingContact(values))
                    }
                    }
                    validationSchema={
                        yup.object({
                            fname: yup.string()
                                .required('Nombre requerido')
                                .max(30, 'Nombre muy largo'),
                            lname: yup.string()
                                .required('Apellido requerido')
                                .max(30, 'Apellido muy largo'),
                            email: yup.string()
                                .required('Email requerido')
                                .email('Email invalido'),
                                cellphone: yup.string()
                                .required('Telefono requerido')
                                .matches(/^[0-9]{10}$/, 'Telefono invalido')
                                .min(10, 'Telefono invalido'),
                            office: yup.number()
                                .required('Oficina requerida'),
                            origin: yup.number()
                                .required('Origen requerida'),
                            status: yup.boolean()
                                .required('Estado requerido'),
                            notes: yup.string()
                                .required('Notas requeridas')

                        })
                    }

                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                        <View style={globalStyles.formContainer}>

                            <CustomInput
                                touched={touched.fname}
                                label="Nombre"
                                errors={errors.fname}
                                onChangeText={handleChange('fname')}
                                onBlur={handleBlur('fname')}
                                value={values.fname}
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
                                touched={touched.cellphone}
                                label="Telefono"
                                errors={errors.cellphone}
                                onChangeText={handleChange('cellphone')}
                                onBlur={handleBlur('cellphone')}
                                value={values.cellphone}
                                keyboardType="numeric"
                            />
                            <Text style={globalStyles.inputLabel}>Estatus</Text>
                            <Picker
                                selectedValue={values.status}
                                onValueChange={(itemValue, itemIndex) => setFieldValue('status', itemValue)}
                                style={globalStyles.picker}
                            >
                               
                                        <Picker.Item label={'Activo'} value={true} />
                                        <Picker.Item label={'Inactivo'} value={false} />
                                  
                            </Picker>
                            <Text>{errors.status && touched.status }</Text>


                            <Text style={globalStyles.inputLabel}>Oficina</Text>
                            <Picker
                                selectedValue={values.office}
                                onValueChange={(itemValue, itemIndex) => setFieldValue('office', itemValue)}
                                style={globalStyles.picker}
                            >
                                {
                                    offices.map(office => (
                                        <Picker.Item key={office.id} label={office.name} value={office.id} />
                                    ))
                                }
                            </Picker>

                            <Text style={globalStyles.inputLabel}>Origen</Text>
                            <Picker
                                selectedValue={values.origin}
                                onValueChange={(itemValue, itemIndex) => setFieldValue('origin', itemValue)}
                                style={globalStyles.picker}
                            >
                                {
                                    origins.map(origin => (
                                        <Picker.Item key={origin.id} label={origin.name} value={origin.id} />
                                    ))
                                }
                            </Picker>
                           
                            <CustomInput
                                bigger={true}
                                touched={touched.notes}
                                label="Notas"
                                errors={errors.notes}
                                onChangeText={handleChange('notes')}
                                onBlur={handleBlur('notes')}
                                value={values.notes}
                                numberOfLines={5}
                                multiline
                            />
                            <View
                                style={{
                                    marginBottom: 10,
                                    alignItems: 'center',
                                }}
                            >
                                <BlueButton
                                    text='Guardar'
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>

                    )}
                </Formik>


            </ScrollView>
        </View>
    )
}
