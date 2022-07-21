import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Property } from '../../interfaces/propertiesInterface';



interface PropertiesState {
    properties: Property[];
    loading: boolean;
    activeProperty: Property | null;
}

const initialState: PropertiesState = {
    properties: [],
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