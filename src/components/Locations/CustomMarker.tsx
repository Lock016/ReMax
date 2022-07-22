import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';
import Animated from 'react-native-reanimated';
import { useMarkerAnimation } from '../../hooks/useMarkerAnimation';
import { Property } from '../../interfaces/propertiesInterface';

interface CustomMarkerProps {
    id: string;
    selectedMarker: Property | null;
    latitude: number;
    longitude: number;
    children?: React.ReactNode;
}

export const CustomMarker = ({
    id,
    selectedMarker,
    latitude,
    longitude,
    children
}: CustomMarkerProps) => {
    const scale = useMarkerAnimation({ id, selectedMarker });

    console.log(latitude, longitude)
    return (
        <Marker
            coordinate={{
                latitude: latitude,
                longitude: longitude,
            }}
        >
            <View style={styles.markerWrapper}>
                <Animated.View
                    style={[
                        styles.marker,
                        {
                            transform: [{ scale: scale }],
                        },
                    ]}
                >
                    <Image style={styles.image} source={require('../../assets/images/ReMax_Balloon.png')} />
                </Animated.View>
            </View>
        </Marker>
    );
}

const styles = StyleSheet.create({
    markerWrapper: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    marker: {
        height: 40,
        width: 40,
        borderRadius: 10,
    },
    image: {
        resizeMode: 'contain',
        width: 40,
        height: 40
    },

});
