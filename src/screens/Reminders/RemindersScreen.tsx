import React, { useEffect, } from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
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


const eventConfig: AddCalendarEvent.CreateOptions = {

    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    title: "Evento de prueba jejeje",
    location: 'Huizache 1 circuito chamula 615 Durango Mexico',
    notes: 'jfdsa;lkjffkljfklj;sdfjlkdsafjksdafdas'
};



const createCalendarEvent = async () => {
    const eventInfo = await AddCalendarEvent.presentEventCreatingDialog(eventConfig)

    console.log(eventInfo)
}




const RemindersScreen = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startGettingOffices())
        dispatch(startGettingContacts())
    }, [])
    const { offices, contacts } = useAppSelector(state => state.contacts)


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
                        option: 'Recorrrido',
                        property: '',
                        date: '',
                        notes: '',
                        
                        
                        type: '',
                        operation: '',

                        quantity: '',
                        currency: false,
                        office: '',
                        agent: '',
                        buyerAgent: '',
                        accept: false,
                    }}
                    enableReinitialize={true}
                    onSubmit={
                        createCalendarEvent
                    }
                    validationSchema={
                        yup.object({
                            property: yup.string().required('El inmueble es requerido'),
                            date: yup.string().required('La fecha de recordatorio es requerida'),
                            option: yup.string().required('El tipo de actividad es requerido'),
                            notes: yup.string().required('Las notas son requeridas'),
                            
                            type: yup.string().required('El tipo es requerido'),
                            operation: yup.string().required('La operación es requerida'),
                            
                            currency: yup.boolean().required('La moneda es requerida'),
                            agent: yup.string().required('El agente es requerido'),
                            office: yup.string().required('El oficina es requerida'),
                            buyerAgent: yup.string().required('El agente es requerido'),
                            quantity: yup.string().required('La cantidad es requerida'),
                            accept: yup.boolean().required('El aceptación es requerida'),
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
                                    "LLamadas",
                                    "Propuestas"
                                ]}
                            />

                            <CustomInput
                                touched={touched.property}
                                label="Propiedad"
                                errors={errors.property}
                                onChangeText={handleChange('property')}
                                onBlur={handleBlur('property')}
                                value={values.property}
                            />

                            {
                                values.option === 'Recorrrido' &&
                                <>

                                    <Text style={styles.blueText}>Recorridos</Text>
                                    <CustomInput
                                        touched={touched.date}
                                        label="Fecha de recorrido"
                                        errors={errors.date}
                                        onChangeText={handleChange('date')}
                                        onBlur={handleBlur('date')}
                                        value={values.date}
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
                                values.option === 'LLamadas' &&
                                <>

                                    <Text style={styles.blueText}>Llamadas</Text>
                                    <CustomInput
                                        touched={touched.date}
                                        label="Fecha de recorrido"
                                        errors={errors.date}
                                        onChangeText={handleChange('date')}
                                        onBlur={handleBlur('date')}
                                        value={values.date}
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
                                    <CustomInput
                                        touched={touched.date}
                                        label="Fecha de propuesta"
                                        errors={errors.date}
                                        onChangeText={handleChange('date')}
                                        onBlur={handleBlur('date')}
                                        value={values.date}
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

                                    <Text style={globalStyles.inputLabel}>Agente Opcionador</Text>
                                    <Picker
                                        selectedValue={values.agent}
                                        onValueChange={(itemValue, itemIndex) => setFieldValue('agent', itemValue)}
                                        style={globalStyles.picker}
                                    >
                                        {
                                            contacts.map(contact => (
                                                <Picker.Item key={contact.id} label={`${contact.fname} ${contact.lname}` } value={`${contact.fname} ${contact.lname}`} />
                                            ))
                                        }
                                    </Picker>


                                    <Text style={globalStyles.inputLabel}>Oficina</Text>
                                    <Picker
                                        selectedValue={values.office}
                                        onValueChange={(itemValue, itemIndex) => setFieldValue('office', itemValue)}
                                        style={globalStyles.picker}
                                    >
                                        {
                                            offices.map(office => (
                                                <Picker.Item key={office.id} label={office.name} value={office.name} />
                                            ))
                                        }
                                    </Picker>
                                    

                                    <Text style={globalStyles.inputLabel}>Agente Comprador</Text>
                                    <Picker
                                        selectedValue={values.buyerAgent}
                                        onValueChange={(itemValue, itemIndex) => setFieldValue('buyerAgent', itemValue)}
                                        style={globalStyles.picker}
                                    >
                                        {
                                            contacts.map(contact => (
                                                <Picker.Item key={contact.id} label={`${contact.fname} ${contact.lname}`} value={`${contact.fname} ${contact.lname}`} />
                                            ))
                                        }
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