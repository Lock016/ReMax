import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Property } from '../../interfaces/propertiesInterface';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setActiveProperty } from '../../store/properties';
import React from 'react'
import { numberWithCommas } from '../../helpers/NumberWithCommas';

interface Nav extends StackNavigationProp<any, any> { }

interface Props {
    property: Property
}

const PropertiesCard = ({ property }: Props) => {

    const { images, address, price, type } = property;

    const dispatch = useAppDispatch();

    const navigation = useNavigation<Nav>();

    const truncate = (str: string) => {
        if (str.length > 27) {
            return str.substring(0, 27) + '...';
        } else {
            return str;
        }
    }

    return (
        <TouchableOpacity 
            style={{ ...styles.cardContainer, marginHorizontal: 20}}
            onPress={ () => {
                dispatch(setActiveProperty(property));
                navigation.navigate('PropertyDetail');
            }}
            activeOpacity={0.9}
        >
            <View style={ styles.imageContainer}>
                <Image
                    source={{ uri: images[0].image }}
                    style={ styles.image }
                />
            </View>
            <View style={ styles.infoContainer}>
                <Text style= { styles.propertyTitle}>{ truncate(address) }</Text>
                <Text style= { styles.propertyPrice}>{ `$ ${numberWithCommas(price)}` }</Text>
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