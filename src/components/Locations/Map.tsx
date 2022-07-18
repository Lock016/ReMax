import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { CustomMarker } from './CustomMarker';
import { mapStyle } from './mapStyle';
import { markers } from './Markers';

export const Map = () => {
    return (
        <View style={styles.container}>
            <MapView
                customMapStyle={mapStyle}
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                initialRegion={{
                    latitude: 41.3995345,
                    longitude: 2.1909796,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }}
                mapType="standard"
            >
                {
                    markers.map((marker, index) => (
                        <CustomMarker
                            key={marker.id}
                            id={marker.id}
                            selectedMarker={null}
                            color={marker.color}
                            latitude={marker.latitude}
                            longitude={marker.longitude}
                        />

                    ))
                }
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});