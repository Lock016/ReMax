//useMap.js
import { useState, useRef, useCallback, LegacyRef } from 'react';
import MapView from 'react-native-maps';

const DEVIATION = 0.0002;

export const useMap = () => {
    const mapRef = useRef<MapView>();
    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleNavigateToPoint = useCallback(
        (item) => {
            const { id, latitude, longitude, color } = item;
            if (mapRef) {
                mapRef.current?.animateCamera(
                    {
                        center: {
                            latitude: latitude - DEVIATION,
                            longitude: longitude,
                        },
                        zoom: 18.5,
                    },
                    { duration: 500 }
                );
            }
            setSelectedMarker(id);
        },
        [mapRef, setSelectedMarker]
    );

    const handleResetInitialPosition = useCallback(() => {
        if (mapRef) {
            mapRef.current?.animateToRegion(
                {
                    latitude: 41.3995345,
                    longitude: 2.1909796,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                },
                500
            );
            setSelectedMarker(null);
        }
    }, [mapRef, setSelectedMarker]);

    return {
        mapRef,
        selectedMarker,
        handleNavigateToPoint,
        handleResetInitialPosition,
    };
}