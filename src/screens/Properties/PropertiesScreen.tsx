import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
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
import BlueButton from '../../components/BlueButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { startFilteringProperties, startGettingProperties } from '../../store/properties';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Nav extends StackNavigationProp<any, any> { }


export const PropertiesScreen = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigation<Nav>();

    const [isActive, setIsActive] = useState({
        op1: true,
        op2: false,
        op3: false,
    });

    const [selectedValue, setSelectedValue] = useState('Casa');

    return (
        <SafeAreaView style={globalStyles.safeAreaContainer} >
            <Header />
            <ScrollView style={{ ...globalStyles.container, paddingHorizontal: 0 }} showsVerticalScrollIndicator={false}>
                <Text style={{ ...globalStyles.title, paddingHorizontal: 20 }}>Propiedades</Text>
                <Formik
                    initialValues={{
                        propertyType: '',
                        location: '',
                        fromPrice: '',
                        toPrice: '',
                        fromSize: '',
                        toSize: '',
                        rooms: '',
                        bathrooms: '',
                        parking: '',
                    }}
                    onSubmit={ (values) => {
                        dispatch(startFilteringProperties(values));
                        navigate.navigate('PropertiesResults');
                    }}
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
                                selectedValue={values.propertyType}
                                onValueChange={(itemValue, itemIndex) => setFieldValue('propertyType', itemValue)}
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
                            <Text style={globalStyles.inputLabel}>Precio</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <SmallCustomInput
                                    touched={touched.fromPrice}
                                    label="Desde"
                                    errors={errors.fromPrice}
                                    onChangeText={handleChange('fromPrice')}
                                    onBlur={handleBlur('fromPrice')}
                                    value={values.fromPrice}
                                    keyboardType="numeric"
                                />
                                <SmallCustomInput
                                    touched={touched.toPrice}
                                    label="Hasta"
                                    errors={errors.toPrice}
                                    onChangeText={handleChange('toPrice')}
                                    onBlur={handleBlur('toPrice')}
                                    value={values.toPrice}
                                    keyboardType="numeric"
                                />

                            </View>
                            <Text style={globalStyles.inputLabel}>Tamaño</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <SmallCustomInput
                                    touched={touched.fromSize}
                                    label="Desde"
                                    errors={errors.fromSize}
                                    onChangeText={handleChange('fromSize')}
                                    onBlur={handleBlur('fromSize')}
                                    value={values.fromSize}
                                    keyboardType="numeric"
                                />
                                <SmallCustomInput
                                    touched={touched.toSize}
                                    label="Hasta"
                                    errors={errors.toSize}
                                    onChangeText={handleChange('toSize')}
                                    onBlur={handleBlur('toSize')}
                                    value={values.toSize}
                                    keyboardType="numeric"
                                />
                            </View>
                            <Text style={globalStyles.inputLabel}>Habitaciones</Text>
                            <Picker
                                selectedValue={values.rooms}
                                onValueChange={(itemValue, itemIndex) => setFieldValue('rooms', itemValue)}
                                style={globalStyles.picker}
                            >
                                <Picker.Item label="0" value={0} />
                                <Picker.Item label="1" value={1} />
                                <Picker.Item label="2" value={2} />
                                <Picker.Item label="3" value={3} />
                                <Picker.Item label="4" value={4} />
                                <Picker.Item label="5" value={5} />
                            </Picker>
                            <Text style={globalStyles.inputLabel}>Baños</Text>
                            <Picker
                                selectedValue={values.bathrooms}
                                onValueChange={(itemValue, itemIndex) => setFieldValue('bathrooms', itemValue)}
                                style={globalStyles.picker}
                            >
                                <Picker.Item label="0" value={0} />
                                <Picker.Item label="0.5" value={0.5} />
                                <Picker.Item label="1" value={1} />
                                <Picker.Item label="1.5" value={1.5} />
                                <Picker.Item label="2" value={2} />
                                <Picker.Item label="2.5" value={2.5} />
                                <Picker.Item label="3" value={3} />
                            </Picker>
                            <Text style={globalStyles.inputLabel}>Estacionamientos</Text>
                            <Picker
                                selectedValue={values.parking}
                                onValueChange={(itemValue, itemIndex) => setFieldValue('parking', itemValue)}
                                style={globalStyles.picker}
                            >
                                <Picker.Item label="0" value={0} />
                                <Picker.Item label="1" value={1} />
                                <Picker.Item label="2" value={2} />
                                <Picker.Item label="3" value={3} />
                                <Picker.Item label="4" value={4} />
                                <Picker.Item label="5" value={5} />
                                <Picker.Item label="6" value={6} />
                            </Picker>
                            <View
                                style={{
                                    marginBottom: 10,
                                    alignItems: 'center',
                                }}
                            >
                                <BlueButton
                                    text='Buscar'
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        // marginHorizontal: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 7,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    imageContainer: {
        borderRadius: 100
    },
    infoContainer: {

    },
    propertyPrice: {
        fontSize: 12,
        color: '#656565',
        marginBottom: 5,
        fontFamily: 'Gotham-Bold'
    },
    propertyTitle: {
        fontSize: 14,
        fontFamily: 'Gotham-Bold',
        color: '#003DA5',
        marginBottom: 5,
    },
    propertyType: {
        fontSize: 12,
        color: '#656565',
        marginBottom: 5,
        fontFamily: 'GothamBook'
    }
})