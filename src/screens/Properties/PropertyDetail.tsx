import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, FlatList } from 'react-native'
import { globalStyles } from '../../theme/globalTheme'
import { Header } from '../../components/ui/Header';  
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Property } from '../../store/properties';

import React from 'react'

const PropertyDetail = () => {

    const { activeProperty } = useAppSelector(state => state.properties)

    const {name, images, price, description, areas, bathrooms, bedrooms } = activeProperty as Property;

    return(
        <SafeAreaView style={ globalStyles.safeAreaContainer}>
            <Header
                backButton={true}
            />
            <ScrollView style={{ ...globalStyles.container, marginVertical: 0}} showsVerticalScrollIndicator={false}>
                <Text style={{ ...globalStyles.title, marginTop: 15}}>{name}</Text>
                <FlatList
                    data={images}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Image
                        source={{
                            uri: item
                        }}
                        style={{ width: 270, height: 270, marginVertical: 30,}}
                    />
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={ styles.detailsTitles}>CASA EN VENTA</Text>
                <Text style={ styles.detailsTexts }>{price}</Text>
                <Text style={ styles.detailsTitles}>Descripción</Text>
                <Text style={ styles.detailsTexts }>{description}</Text>
                {/* <Text style={ styles.detailsTitles}>Detalles</Text>
                <Text style={ styles.detailsTexts }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sequi dolorem nisi nobis labore asperiores aspernatur magnam dolore harum, ipsa sit animi sapiente cumque eveniet, voluptate consectetur pariatur incidunt modi!</Text> */}
                <Text style={ styles.detailsTitles}>Areas</Text>
                <Text style={ styles.detailsTexts }>{areas}</Text>
                <Text style={ styles.detailsTitles}>Cuartos</Text>
                <Text style={{ ...styles.detailsTexts, marginBottom: 15 }}>{bedrooms}</Text>
                <Text style={ styles.detailsTitles}>Baños</Text>
                <Text style={{ ...styles.detailsTexts, marginBottom: 15 }}>{bathrooms}</Text>

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