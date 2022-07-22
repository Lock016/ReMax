import React, { useEffect, useState, } from 'react'
import { Button, Platform, SafeAreaView, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import { Header } from '../../components/ui/Header'
import { globalStyles } from '../../theme/globalTheme'
import * as yup from 'yup'
import { Formik } from 'formik';
import { CustomInput } from '../../components/ui/CustomInput';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import BlueButton from '../../components/BlueButton';
import CustomSwitch from '../../components/CustomSwitch'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { startGettingOffices, startGettingContacts } from '../../store/contacts'
import { Picker } from '@react-native-picker/picker'
import { startGettingProperties } from '../../store/properties'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'



const eventConfig: AddCalendarEvent.CreateOptions = {

    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    title: "Evento de prueba jejeje",
    location: 'Huizache 1 circuito chamula 615 Durango Mexico',
    notes: 'jfdsa;lkjffkljfklj;sdfjlkdsafjksdafdas'
};



const createCalendarEvent = async (
    eventConfig: AddCalendarEvent.CreateOptions
) => {
    const eventInfo = await AddCalendarEvent.presentEventCreatingDialog(eventConfig)



}






const RemindersScreen = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startGettingOffices())
        dispatch(startGettingContacts())
        dispatch(startGettingProperties())
    }, [])

    const { properties } = useAppSelector(state => state.properties)



    return (
        <SafeAreaView style={globalStyles.safeAreaContainer}>
            <Header />
            <ScrollView
                style={globalStyles.container}
                showsVerticalScrollIndicator={false}
            >
                <Text style={globalStyles.title}>CrearActividad</Text>

                <Formik
                    initialValues={{
                        option: "Recorrrido",
                        property: '',
                        date: new Date(),
                        notes: '',


                        type: 'Aclaración',
                        operation: 'Venta',

                        quantity: '',
                        currency: false,
                        accept: false,
                    }}
                    enableReinitialize={true}
                    onSubmit={
                        (values, { resetForm }) => {
                            // console.log(values)
                            if (values.option === 'Recorrrido') {
                                createCalendarEvent({
                                    title: 'Recorrrido',
                                    startDate: values.date.toISOString(),
                                    location: values.property,
                                    notes: values.notes,

                                })
                            }
                            if (values.option === 'Llamadas') {
                                createCalendarEvent({
                                    title: 'Llamada',
                                    startDate: values.date.toISOString(),
                                    // startDate: moment(values.date).subtract(1, 'day').format('YYYY-MM-DD'),
                                    location: values.property,
                                    notes: `Tipo: ${values.type}\nOperacion: ${values.operation}\nNotas: ${values.notes}`

                                })
                            }
                            if (values.option === 'Propuestas') {
                                createCalendarEvent({
                                    title: 'Propuesta',
                                    startDate: values.date.toISOString(),
                                    location: values.property,
                                    notes: `Cantidad: ${values.quantity}\nMondeda: ${values.currency ? 'MXN' :'USD'}\nAcepta: ${values.accept ? 'Si' : 'No'}\nNotas: ${values.notes}`

                                })
                            }


                            resetForm();
                        }
                    }


                    validationSchema={
                        yup.object({
                            property: yup.string().required('El inmueble es requerido'),
                            date: yup.date().required('La fecha es requerida'),
                            option: yup.string(),
                            notes: yup.string().required('Las notas son requeridas'),

                            type: yup.string().when('option', {
                                is: 'Llamadas',
                                then: yup.string().required('El tipo de llamada es requerido'),
                                otherwise: yup.string()
                            }),

                            operation: yup.string().when('option', {
                                is: 'Llamadas',
                                then: yup.string().required('La operación es requerida'),
                                otherwise: yup.string(),
                            }),

                            currency: yup.boolean().when('option', {
                                is: 'Propuestas',
                                then: yup.boolean().required('La moneda es requerida'),
                                otherwise: yup.boolean(),
                            }),

                            quantity: yup.string().when('option', {
                                is: 'Propuestas',
                                then: yup.string().required('La cantidad es requerida'),
                                otherwise: yup.string(),
                            }),
                            accept: yup.boolean().when('option', {
                                is: 'Propuestas',
                                then: yup.boolean().required('El estado de la propuesta es requerido'),
                                otherwise: yup.boolean(),
                            }),

                        })
                    }

                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                        <View style={globalStyles.formContainer}>


                            <CustomSwitch
                                onValueChange={(value) => {
                                    setFieldValue('option', value)
                                }}
                                value={values.option}
                                options={[
                                    "Recorrrido",
                                    "Llamadas",
                                    "Propuestas"
                                ]}
                            />
                            <Text style={globalStyles.inputLabel}>Propiedad</Text>
                            <Picker

                                selectedValue={values.property}
                                onValueChange={(itemValue, itemIndex) => setFieldValue('property', itemValue)}
                                style={globalStyles.picker}
                            >
                                {
                                    properties.map(property => (
                                        <Picker.Item key={property.id} label={property.address} value={property.address} />
                                    ))
                                }
                            </Picker>

                            {
                                values.option === 'Recorrrido' &&
                                <>

                                    <Text style={styles.blueText}>Recorridos</Text>
                                    <Text style={globalStyles.inputLabel}>Fecha de recorrido</Text>


                                    <DatePicker
                                        date={values.date}
                                        onDateChange={(date) => setFieldValue('date', date)}
                                        style={{
                                            marginBottom: 20,
                                        }}
                                        locale="es-MX"
                                        mode="date"
                                    />


                                    <CustomInput
                                        touched={touched.notes}
                                        label="Comentarios"
                                        errors={errors.notes}
                                        onChangeText={handleChange('notes')}
                                        onBlur={handleBlur('notes')}
                                        value={values.notes}
                                        bigger={true}
                                        numberOfLines={5}
                                        multiline
                                    />

                                </>

                            }
                            {
                                values.option === 'Llamadas' &&
                                <>

                                    <Text style={styles.blueText}>Llamadas</Text>


                                    <Text style={globalStyles.inputLabel}>Tipo</Text>
                                    <Picker
                                        selectedValue={values.type}
                                        onValueChange={(itemValue, itemIndex) => setFieldValue('type', itemValue)}
                                        style={globalStyles.picker}
                                    >

                                        <Picker.Item label={'Aclaración'} value={"Aclaración"} />
                                        <Picker.Item label={'Presupuesto'} value={"presupuesto"} />
                                        <Picker.Item label={'Asesoria'} value={"Asesoria"} />

                                    </Picker>
                                    <Text style={globalStyles.inputLabel}>Operacion</Text>
                                    <Picker
                                        selectedValue={values.operation}
                                        onValueChange={(itemValue, itemIndex) => setFieldValue('operation', itemValue)}
                                        style={globalStyles.picker}
                                    >

                                        <Picker.Item label={'Venta'} value={"Venta"} />
                                        <Picker.Item label={'Compra'} value={"Compra"} />

                                    </Picker>
                                    <CustomInput
                                        touched={touched.notes}
                                        label="Comentarios"
                                        errors={errors.notes}
                                        onChangeText={handleChange('notes')}
                                        onBlur={handleBlur('notes')}
                                        value={values.notes}
                                        bigger={true}
                                        numberOfLines={5}
                                        multiline
                                    />
                                </>
                            }
                            {
                                values.option === 'Propuestas' &&
                                <>

                                    <Text style={styles.blueText}>Propuestas</Text>
                                    <Text style={globalStyles.inputLabel}>Fecha de propuesta</Text>


                                    <DatePicker
                                        date={values.date}
                                        onDateChange={(date) => setFieldValue('date', date)}
                                        style={{
                                            marginBottom: 20,
                                        }}
                                        locale="es-MX"
                                        mode="date"
                                    />

                                    <CustomInput
                                        touched={touched.quantity}
                                        label="Cantidad"
                                        errors={errors.quantity}
                                        onChangeText={handleChange('quantity')}
                                        onBlur={handleBlur('quantity')}
                                        value={values.quantity}
                                        keyboardType='numeric'
                                    />
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Text style={globalStyles.inputLabel}>USD</Text>
                                        <View
                                            style={{
                                                top: -2
                                            }}
                                        >
                                            <Switch
                                                trackColor={{ false: "#D9D9DB", true: "#003DA5" }}
                                                thumbColor={(Platform.OS === 'android') ? '#003DA5' : ''}
                                                onValueChange={(value) => setFieldValue('currency', value)}
                                                value={values.currency}
                                            />

                                        </View>
                                        <Text style={globalStyles.inputLabel}>MXN</Text>
                                    </View>

                                    <CustomInput
                                        touched={touched.notes}
                                        label="Comentarios"
                                        errors={errors.notes}
                                        onChangeText={handleChange('notes')}
                                        onBlur={handleBlur('notes')}
                                        value={values.notes}
                                        bigger={true}
                                        numberOfLines={5}
                                        multiline
                                    />
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Text style={globalStyles.inputLabel}>Realizado</Text>
                                        <View style={{ top: -2 }}>
                                            <Switch
                                                trackColor={{ false: "#D9D9DB", true: "#003DA5" }}
                                                thumbColor={(Platform.OS === 'android') ? '#003DA5' : ''}
                                                onValueChange={(value) => setFieldValue('accept', value)}
                                                value={values.accept}
                                            />
                                        </View>
                                    </View>
                                </>
                            }
                            <BlueButton text="Guardar" onPress={handleSubmit} />
                        </View>
                    )}
                </Formik>



            </ScrollView>
        </SafeAreaView >


    )
}

export default RemindersScreen

const styles = StyleSheet.create({
    blueText: {
        fontSize: 18,
        fontFamily: 'Gotham-Bold',
        color: '#003DA5',
        marginTop: 10,
        marginBottom: 10
    }
})