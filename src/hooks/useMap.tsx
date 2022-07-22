//useMap.js
import { useState, useRef, useCallback, LegacyRef } from 'react';
import MapView from 'react-native-maps';
import { Property } from '../interfaces/propertiesInterface';

const DEVIATION = 0.0002;

export const useMap = () => {
    const mapRef = useRef<MapView>();
    const [selectedMarker, setSelectedMarker] = useState<Property | null>(null);

    const handleNavigateToPoint = useCallback(
        (item: Property) => {
            console.log("Item ", item)
            // const { id, latitude, longitude, color } = item;
            if (mapRef) {
                mapRef.current?.animateCamera(
                    {
                        center: {
                            latitude: parseFloat(item.lt) - DEVIATION,
                            longitude: parseFloat(item.ln),
                        },
                        zoom: 18.5,
                    },
                    { duration: 500 }
                );
            }
            setSelectedMarker(item);
        },
        [mapRef, setSelectedMarker]
    );

    const handleResetInitialPosition = useCallback(() => {
        if (mapRef) {
            mapRef.current?.animateToRegion(
                {
                    latitude: 24.032616181389447,
                    longitude: -104.66120022698489,
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