import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PermissionStatus } from 'react-native-permissions';


interface PermissionState {
    locationStatus: PermissionStatus;
  
}
const initialState: PermissionState = {
    locationStatus: "unavailable",
};

export const permissionSlice = createSlice({
    name: 'permission',
    initialState: initialState,
    reducers: {
        setPermissions: (state: PermissionState, { payload }: PayloadAction<PermissionStatus>) => {
            state.locationStatus = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setPermissions } = permissionSlice.actions;