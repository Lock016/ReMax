import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, FlatList, Share } from 'react-native'
import { globalStyles } from '../../theme/globalTheme'
import { Header } from '../../components/ui/Header';  
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Property } from '../../interfaces/propertiesInterface';

import React from 'react'
import { numberWithCommas } from '../../helpers/NumberWithCommas';
import BlueButton from '../../components/BlueButton';

const PropertyDetail = () => {

    const { activeProperty } = useAppSelector(state => state.properties)

    const {address, images, price, description, areas, bathrooms, bedrooms, type, parking_lots, typeOfService, size, link } = activeProperty as Property;

    const areasArray = areas.split(',');

    const onShare = async () => {
        try{
            const result = await Share.share({
                message: link,
                title: 'Comparte esta propiedad',
                url: link
            })
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <SafeAreaView style={ globalStyles.safeAreaContainer}>
            <Header
                backButton={true}
            />
            <ScrollView style={{ ...globalStyles.container, marginVertical: 0}} showsVerticalScrollIndicator={false}>
                <Text style={{ ...globalStyles.title, marginTop: 15}}>{address}</Text>
                <FlatList
                    data={images}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Image
                        source={{
                            uri: item.image
                        }}
                        style={{ width: 270, height: 270, marginVertical: 30,}}
                    />
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={{ ...styles.detailsTitles, textTransform: 'uppercase'}}>{type} en {typeOfService}</Text>
                <Text style={ styles.detailsTexts }>{ `$ ${numberWithCommas(price)}` }</Text>

                <Text style={ styles.detailsTitles}>Tamaño</Text>
                <Text style={{ ...styles.detailsTexts,}}>{`${size}m2`}</Text>

                <Text style={ styles.detailsTitles}>Descripción</Text>
                <Text style={ styles.detailsTexts }>{description}</Text>
                {
                    areas !== 'null' &&
                    <>
                        <Text style={ styles.detailsTitles}>Areas</Text>
                        {
                            areasArray.map((area, index) => (
                                <Text key={index} style={ styles.detailsTexts }>• {area}</Text>
                            ))
                        }
                    </>
                }
                {
                    bedrooms !== 0 &&
                    <>  
                        <Text style={ styles.detailsTitles}>Cuartos</Text>
                        <Text style={{ ...styles.detailsTexts}}>{bedrooms}</Text>
                    </>
                }
                {
                    bathrooms !== 0 &&
                    <>
                        <Text style={ styles.detailsTitles}>Baños</Text>
                        <Text style={{ ...styles.detailsTexts }}>{bathrooms}</Text>
                    </>
                }
                {
                    parking_lots !== 0 &&
                    <>
                        <Text style={ styles.detailsTitles}>Estacionamientos</Text>
                        <Text style={{ ...styles.detailsTexts, marginBottom: 15 }}>{parking_lots}</Text>
                    </>
                }
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: 15
                }}>
                    <BlueButton
                        text='Compartir'
                        onPress={onShare}
                    />
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default PropertyDetail

const styles = StyleSheet.create({
    detailsTitles: {
        fontSize: 18,
        fontFamily: 'Gotham-Bold',
        color: '#003DA5',
        marginTop: 10,
        marginBottom: 10
    },
    detailsTexts: {
        fontSize: 16,
        fontFamily: 'GothamBook',
        color: '#000',
        textAlign: 'justify',
    }
})