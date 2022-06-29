import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native'
import { globalStyles } from '../../theme/globalTheme'
import { Header } from '../../components/ui/Header';  
import { Picker } from '@react-native-picker/picker';
// import InputComponent from '../../components/InputComponent';   
import * as yup from 'yup'
import { Formik } from 'formik'
import SwitchComponent from '../../components/SwitchComponent'; 
import { residencialItems, commercialItems, industrialItems } from '../../data/propertiesArrays';    
import { CustomInput } from '../../components/ui/CustomInput';
import { SmallCustomInput } from '../../components/ui/SmallCustomInput';
import React, { useState } from 'react'


export const PropertiesScreen = () => {

    const [isActive, setIsActive] = useState({
        op1: true,
        op2: false,
        op3: false,
    });

    const [selectedValue, setSelectedValue] = useState();

    return(
        <SafeAreaView style={globalStyles.safeAreaContainer} >
            <Header/>
            <ScrollView style={globalStyles.container} >
                <Text style={globalStyles.title}>Propiedades</Text>
                <Formik
                    initialValues={{
                        propertyType: '',
                        propertyName: '',
                        location: '',
                        fromPrice: '',
                        toPrice: '',
                        size: '',
                        rooms: '',
                        bathrooms: '',
                        parking: '',
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                    validationSchema={
                        yup.object({
                            propertyType: yup.string().required('El tipo de propiedad es requerido'),
                            location: yup.string().required('La ubicación es requerida'),
                            fromPrice: yup.string().required('El precio es requerido'),
                            toPrice: yup.string().required('El precio es requerido'),
                            size: yup.string().required('El tamaño es requerido'),
                            rooms: yup.string().required('El número de habitaciones es requerido'),
                            bathrooms: yup.string().required('El número de baños es requerido'),
                            parking: yup.string().required('El número de estacionamientos es requerido'),
                        })
                    }
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                        <View style={globalStyles.formContainer}>
                            <Text style={globalStyles.inputLabel}>Tipo de Inmueble</Text>
            
                            <SwitchComponent
                                setIsActive={setIsActive}
                                isActive={isActive}
                                op1={'Residencial'}
                                op2={'Comercial'}
                                op3={'Industrial'}
                            />
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                style={globalStyles.picker}
                            >
                                {isActive.op1 ? residencialItems.map((item, index) => {
                                    return <Picker.Item key={index} label={item.label} value={item.value} />
                                }) : null}
                                {isActive.op2 ? commercialItems.map((item, index) => {
                                    return <Picker.Item key={index} label={item.label} value={item.value} />
                                }) : null}
                                {isActive.op3 ? industrialItems.map((item, index) => {
                                    return <Picker.Item key={index} label={item.label} value={item.value} />
                                }) : null}
                            </Picker>
                            <CustomInput
                                touched={touched.location}
                                label="Ubicación"
                                errors={errors.location}
                                onChangeText={handleChange('location')}
                                onBlur={handleBlur('location')}
                                value={values.location}      
                            />
                            {/* <CustomInput
                                touched={touched.price}
                                label="Precio"
                                errors={errors.price}
                                onChangeText={handleChange('price')}
                                onBlur={handleBlur('price')}
                                value={values.price}
                                keyboardType="numeric"
                            /> */}
                            <Text style={globalStyles.inputLabel}>Precio</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <SmallCustomInput
                                    touched={touched.fromPrice}
                                    label="Desde"
                                    errors={errors.fromPrice}
                                    onChangeText={handleChange('price')}
                                    onBlur={handleBlur('price')}
                                    value={values.fromPrice}
                                    keyboardType="numeric"
                                />
                                <SmallCustomInput
                                    touched={touched.toPrice}
                                    label="Hasta"
                                    errors={errors.toPrice}
                                    onChangeText={handleChange('price')}
                                    onBlur={handleBlur('price')}
                                    value={values.toPrice}
                                    keyboardType="numeric"
                                />

                            </View>
                            <CustomInput
                                touched={touched.size}
                                label="Tamaño"
                                errors={errors.size}
                                onChangeText={handleChange('size')}
                                onBlur={handleBlur('size')}
                                value={values.size}
                                keyboardType="numeric"
                            />
                        </View>
                    )}
                </Formik>

{/* 
                <InputComponent
                    label="Precio"
                />
                <InputComponent
                    label="Tamaño"
                />
                <InputComponent
                    label="Oficina"
                /> */}
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    
})