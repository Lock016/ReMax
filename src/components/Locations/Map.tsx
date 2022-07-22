import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch } from 'react-redux';
import { useMap } from '../../hooks/useMap';
import { BottomSheet } from './BottomSheet';
import { CustomMarker } from './CustomMarker';
import { mapStyle } from './mapStyle';
import { TopBar } from './TopBar';
import { startGettingProperties } from '../../store/properties/thunks';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const Map = () => {

    const {
        mapRef,
        selectedMarker,
        handleNavigateToPoint,
        handleResetInitialPosition,
    } = useMap();

    const dispatch = useAppDispatch();
    const properties = useAppSelector(state => state.properties.properties);

    useEffect(() => {
        dispatch(startGettingProperties());
    }, [])
    // require('../../assets/images/ReMax_Balloon.png')
    const markers = properties.map(property => ({
        
    }));


    return (
        <View style={styles.container}>
            <TopBar onPressElement={handleResetInitialPosition} />
            <MapView
                ref={mapRef}
                customMapStyle={mapStyle}
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                initialRegion={{
                    latitude: 24.032616181389447,
                    longitude: -104.66120022698489,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }}
                mapType="standard"
            >
                {
                    markers.map((marker) => (
                        <CustomMarker
                            key={marker.id}
                            id={marker.id}
                            selectedMarker={null}
                            color={marker.color}
                            latitude={marker.latitude}
                            longitude={marker.longitude}
                        >
                        </CustomMarker>

                    ))
                }
            </MapView>
            <BottomSheet onPressElement={handleNavigateToPoint} />

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