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
import { ActiveBottomSheet } from './ActiveBottomSheet';

export const Map = () => {

    const {
        mapRef,
        selectedMarker,
        handleNavigateToPoint,
        handleResetInitialPosition,
    } = useMap();

    const dispatch = useAppDispatch();
    const { properties, loading } = useAppSelector(state => state.properties);

    useEffect(() => {
        dispatch(startGettingProperties());
    }, [])
    // require('../../assets/images/ReMax_Balloon.png')

    console.log(properties)
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
                    properties.map((marker) => (
                        <CustomMarker
                            id={(marker.id).toString()}
                            key={marker.id}
                            selectedMarker={selectedMarker}
                            latitude={parseFloat(marker.lt)}
                            longitude={parseFloat(marker.ln)}
                        >
                        </CustomMarker>

                    ))
                }
            </MapView>
            {
                !loading && selectedMarker == null &&
                <BottomSheet onPressElement={handleNavigateToPoint} />
            }

            {
                !loading && selectedMarker != null &&
                <ActiveBottomSheet activeData={selectedMarker} />
            }

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