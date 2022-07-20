import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../theme/globalTheme'
import React from 'react'
import { Header } from '../../components/ui/Header'
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import * as yup from 'yup'
import { Formik } from 'formik';
import { CustomInput } from '../../components/ui/CustomInput';
import SwitchComponent from '../../components/SwitchComponent';
import { useState } from 'react'
import { CustomSwitch } from '../../components/CustomSwitch';
import BlueButton from '../../components/BlueButton';

const eventConfig: AddCalendarEvent.CreateOptions = {
    title: "Evento de prueba jejeje", 
    location: 'Huizache 1 circuito chamula 615 Durango Mexico',
    notes: 'jfdsa;lkjffkljfklj;sdfjlkdsafjksdafdas'

};

const createCalendarEvent = async () => {
    const eventInfo = await AddCalendarEvent.presentEventCreatingDialog(eventConfig)

    console.log(eventInfo)
}




const RemindersScreen = () => {

    const [isActive, setIsActive] = useState({
        op1: true,
        op2: false,
        op3: false,
    });

    const [isOn, setIsOn] = useState({
        done: true,
        currency: true,
        accept: true,
    });
    
    const { done, currency, accept } = isOn;
    
    const onChange = ( value: boolean, field: string ) => {
        setIsOn({
            ...isOn,
            [field]: value
        });
    }


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
                        user: '',
                        property: '',
                        date: '',
                        comments: '',
                        activityType: '',
                        quantity: '',
                        coin: '',
                        agent: '',
                        office: '',
                        notes: '',
                        reminderDate: '',
                        type: '',
                        operation: '',
                        buyerAgent: '',
                    }}
                    enableReinitialize={true}
                    onSubmit={
                        createCalendarEvent
                    }
                    validationSchema={
                        yup.object({
                            // name: yup.string()
                            //     .required('Nombre requerido')
                            //     .max(30, 'Nombre muy largo'),
                            // lname: yup.string()
                            //     .required('Apellido requerido')
                            //     .max(30, 'Apellido muy largo'),
                            // email: yup.string()
                            //     .required('Email requerido')
                            //     .email('Email invalido'),
                            // phone: yup.string()
                            //     .required('Telefono requerido')
                            //     .matches(/^[0-9]{10}$/, 'Telefono invalido')
                            //     .min(10, 'Telefono invalido'),
                            // office: yup.string()
                            //     .required('Oficina requerida'),
                            // origin: yup.string()
                            //     .required('Origen requerida'),
                            // agent: yup.string()
                            //     .required('Agente requerido'),
                            // state: yup.string()
                            //     .required('Estado requerido'),
                            // type: yup.string()
                            //     .required('Tipo requerido'),
                            // notes: yup.string()
                            //     .required('Notas requeridas')

                        })
                    }

                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View style={globalStyles.formContainer}>

                            <SwitchComponent
                                setIsActive={setIsActive}
                                isActive={isActive}
                                op1={'Recorrido'}
                                op2={'Llamadas'}
                                op3={'Propuestas'}
                            />
                            
                            <CustomInput
                                touched={touched.user}
                                label="Usuario"
                                errors={errors.user}
                                onChangeText={handleChange('user')}
                                onBlur={handleBlur('user')}
                                value={values.user}
                            />
                            <CustomInput
                                touched={touched.property}
                                label="Propiedad"
                                errors={errors.property}
                                onChangeText={handleChange('property')}
                                onBlur={handleBlur('property')}
                                value={values.property}
                            />
                            <CustomInput
                                touched={touched.date}
                                label="Fecha"
                                errors={errors.date}
                                onChangeText={handleChange('date')}
                                onBlur={handleBlur('date')}
                                value={values.date}
                            />
                            {
                                isActive.op1 &&
                                <>
                                
                                    <Text style={styles.blueText}>Recorridos</Text>
                                    <CustomInput
                                        touched={touched.reminderDate}
                                        label="Fecha de recorrido"
                                        errors={errors.reminderDate}
                                        onChangeText={handleChange('reminderDate')}
                                        onBlur={handleBlur('reminderDate')}
                                        value={values.reminderDate}
                                    />
                                    <CustomInput
                                        touched={touched.comments}
                                        label="Comentarios"
                                        errors={errors.comments}
                                        onChangeText={handleChange('comments')}
                                        onBlur={handleBlur('comments')}
                                        value={values.comments}
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
                                            <CustomSwitch
                                                isOn={done}
                                                onChange={ (value) => onChange(value, 'done') }
                                            />

                                        </View>
                                    </View>
                                </>

                            }
                            {
                                isActive.op2 &&
                                <>
                                
                                    <Text style={styles.blueText}>Llamadas</Text>
                                    <CustomInput
                                        touched={touched.reminderDate}
                                        label="Fecha de recorrido"
                                        errors={errors.reminderDate}
                                        onChangeText={handleChange('reminderDate')}
                                        onBlur={handleBlur('reminderDate')}
                                        value={values.reminderDate}
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
                                        touched={touched.operation}
                                        label="Operación"
                                        errors={errors.operation}
                                        onChangeText={handleChange('operation')}
                                        onBlur={handleBlur('operation')}
                                        value={values.operation}
                                    /> 
                                    <CustomInput
                                        touched={touched.comments}
                                        label="Comentarios"
                                        errors={errors.comments}
                                        onChangeText={handleChange('comments')}
                                        onBlur={handleBlur('comments')}
                                        value={values.comments}
                                        bigger={true}
                                        numberOfLines={5}
                                        multiline
                                    />
                                </>
                            }
                            {
                                isActive.op3 &&
                                <>
                                
                                    <Text style={styles.blueText}>Propuestas</Text>
                                    <CustomInput
                                        touched={touched.reminderDate}
                                        label="Fecha de propuesta"
                                        errors={errors.reminderDate}
                                        onChangeText={handleChange('reminderDate')}
                                        onBlur={handleBlur('reminderDate')}
                                        value={values.reminderDate}
                                    />
                                    <CustomInput
                                        touched={touched.quantity}
                                        label="Cantidad"
                                        errors={errors.quantity}
                                        onChangeText={handleChange('quantity')}
                                        onBlur={handleBlur('quantity')}
                                        value={values.quantity}
                                    />
                                    <CustomInput
                                        touched={touched.quantity}
                                        label="Cantidad"
                                        errors={errors.quantity}
                                        onChangeText={handleChange('quantity')}
                                        onBlur={handleBlur('quantity')}
                                        value={values.quantity}
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
                                            <CustomSwitch
                                                isOn={currency}
                                                onChange={ (value) => onChange(value, 'currency') }
                                            />

                                        </View>
                                        <Text style={globalStyles.inputLabel}>MXN</Text>
                                    </View>
                                    <CustomInput
                                        touched={touched.agent}
                                        label="Agente opcionador"
                                        errors={errors.agent}
                                        onChangeText={handleChange('agent')}
                                        onBlur={handleBlur('agent')}
                                        value={values.agent}
                                    />
                                    <CustomInput
                                        touched={touched.office}
                                        label="Oficina comprador"
                                        errors={errors.office}
                                        onChangeText={handleChange('office')}
                                        onBlur={handleBlur('office')}
                                        value={values.office}
                                    />
                                    <CustomInput
                                        touched={touched.buyerAgent}
                                        label="Agente Comprador"
                                        errors={errors.buyerAgent}
                                        onChangeText={handleChange('buyerAgent')}
                                        onBlur={handleBlur('buyerAgent')}
                                        value={values.buyerAgent}
                                    />
                                    <CustomInput
                                        touched={touched.comments}
                                        label="Comentarios"
                                        errors={errors.comments}
                                        onChangeText={handleChange('comments')}
                                        onBlur={handleBlur('comments')}
                                        value={values.comments}
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
                                            <CustomSwitch
                                                isOn={accept}
                                                onChange={ (value) => onChange(value, 'accept') }
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
        </SafeAreaView>


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