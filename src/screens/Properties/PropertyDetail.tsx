import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, FlatList } from 'react-native'
import { globalStyles } from '../../theme/globalTheme'
import { Header } from '../../components/ui/Header';  
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Property } from '../../interfaces/propertiesInterface';

import React from 'react'
import { numberWithCommas } from '../../helpers/NumberWithCommas';

const PropertyDetail = () => {

    const { activeProperty } = useAppSelector(state => state.properties)

    const {address, images, price, description, areas, bathrooms, bedrooms, type, typeOfService, size } = activeProperty as Property;

    const areasArray = areas.split(',');

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
                {/* <Text style={ styles.detailsTitles}>Detalles</Text>
                <Text style={ styles.detailsTexts }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi dolorem nisi nobis labore asperiores aspernatur magnam dolore harum, ipsa sit animi sapiente cumque eveniet, voluptate consectetur pariatur incidunt modi!</Text> */}
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
                        <Text style={{ ...styles.detailsTexts, marginBottom: 15 }}>{bathrooms}</Text>
                    </>
                }

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