import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, ImageProps } from 'react-native';
import { Props } from '../../interfaces/locationsInterfaces';



export const ListItem = ({ item, onPressElement }: Props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#FAFAFA' : 'white',
                },
                styles.item,
            ]}
            onPress={() => onPressElement(item)}
        >
            <View style={[styles.logo, { backgroundColor: 'transparent' }]}>
                <Image
                    source={require('../../assets/images/ReMax_Balloon.png')}
                    style={styles.logoImage}
                    resizeMode="contain"
                />
            </View>
            <View>
                <Text style={styles.title}>{item.address}</Text>
                <Text style={styles.direction}>{item.price}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    logo: {
        height: 32,
        width: 32,
        borderRadius: 50,
        marginRight: 19,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        height: '65%',
        width: '65%',
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2F3136',
    },
    direction: {
        fontSize: 14,
        fontWeight: '400',
        color: '#989CA5',
    },
});