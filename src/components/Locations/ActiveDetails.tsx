import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Property } from '../../interfaces/propertiesInterface';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';


export const ActiveDetails = ({ data }: { data: Property }) => {

    const [isShowingMore, setShowingMore] = useState(false)

    const toggleNumberOfLines = () => setShowingMore(!isShowingMore)
    const widthScreen = Dimensions.get('window').width;
    const imagesURI = data.images.map((image) => image.image)
    return (
        <View style={styles.container} >
            <Text style={styles.type}>
                {data.typeOfService} - {data.type}
            </Text>
            <Text style={styles.title}>{data.address}</Text>
            <Text style={styles.description} numberOfLines={isShowingMore ? 20 : 2}>
                {data.description}
            </Text>
            <Text
                onPress={toggleNumberOfLines}
                style={styles.showMore}>
                {isShowingMore ? 'mostrar menos...' : 'mostrar más...'}
            </Text>

            <Text style={styles.price}>
                $ {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} MXN
            </Text>
            <View style={styles.things}>
                <Text>
                    {data.bedrooms} dormitorios
                </Text>
                <Text>
                    {data.bathrooms} baños
                </Text>
                <Text>
                    {data.parking_lots} estacionamientos
                </Text>

                <View style={styles.imageContainer}>
                    {
                        data.images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image.image }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        ))
                    }
                </View>

            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    description: {
        fontSize: 16,
    },
    showMore: {
        color: 'red',
        fontSize: 15,
        marginBottom: 10,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#003DA5',
        marginBottom: 10,
    },
    things: {
        position: 'relative',
        marginBottom: 10,
    },

    type: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
        backgroundColor: '#f5f5f5',
        height: 300,
        width: 400,
    },

    image: {
        width: 300,
        height: 300,
    }


});
