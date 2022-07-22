import { useState, useEffect } from 'react';
import Animated, { interpolate, makeMutable } from 'react-native-reanimated';
import { useTiming } from 'react-native-redash';
import { Property } from '../interfaces/propertiesInterface';

interface useMarkerAnimationProps {
    id: string;
    selectedMarker: Property | null;
}

export const useMarkerAnimation = ({ id, selectedMarker }: useMarkerAnimationProps) => {

    const [active, setActive] = useState(0);

    useEffect(() => {
        if (selectedMarker !== null) {
            setActive((selectedMarker.id).toString() === id ? 1 : 0);
        }
    }, [id, selectedMarker]);

    const scale = interpolate(1, [0, 1], [0, 1]);

    return scale;
}