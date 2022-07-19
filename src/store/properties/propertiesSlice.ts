import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Property {
    id: string,
    name: string,
    location: string,
    price: string,
    images: string [],
    description: string,
    type: string,
    bedrooms: string,
    size: string,
    bathrooms: string,
    garages: string,
    areas: string,
}

interface PropertiesState {
    properties: Property[];
    loading: boolean;
    activeProperty: Property | null;
}

const initialState: PropertiesState = {
    properties: [] as Property[],
    loading: true,
    activeProperty: null,
};


export const propertiesSlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        setProperties: (state: PropertiesState, { payload }: PayloadAction<Property[]>) => {
            state.properties = payload;
        },
        setActiveProperty: (state: PropertiesState, { payload }: PayloadAction<Property>) => {
            state.activeProperty = payload;
        },
        setLoading: (state: PropertiesState, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setProperties, setActiveProperty, setLoading } = propertiesSlice.actions;