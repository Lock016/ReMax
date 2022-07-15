import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { propertiesInterface } from '../../interfaces/propertiesInterface';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'

interface Nav extends StackNavigationProp<any, any> { }

const PropertiesCard = ({ title, price, image, type, id}: propertiesInterface) => {

    const navigation = useNavigation<Nav>();

    return (
        <TouchableOpacity 
            style={{ ...styles.cardContainer, marginHorizontal: 20}}
            onPress={ () => navigation.navigate('PropertyDetail', id)}
        >
            <View style={ styles.imageContainer}>
                <Image
                    source={{ uri: image }}
                    style={ styles.image }
                />
            </View>
            <View style={ styles.infoContainer}>
                <Text style= { styles.propertyTitle}>{ title }</Text>
                <Text style= { styles.propertyPrice}>{ price }</Text>
                <Text style= { styles.propertyType}>{ type }</Text>
            </View>
            <Icon
                name='arrow-forward-ios'
                color={'#003DA5'}
                size={30}
            />
        </TouchableOpacity>
    )
}

export default PropertiesCard

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
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
    // cardContainer: {
    //     backgroundColor: '#fff',
    //     borderRadius: 10,
    //     padding: 10,
    //     marginVertical: 10,
    //     height: 110,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginHorizontal: 1,
    //     flexDirection: 'row',
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 1,
    //     },
    //     shadowOpacity: 0.22,
    //     shadowRadius: 2.22,
    //     elevation: 3,
    // },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    imageContainer: {
        borderRadius: 100
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10,
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


// cardContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,
//     height: 110,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 1,
//     flexDirection: 'row',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },