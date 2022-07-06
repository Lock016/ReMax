import { Dispatch } from 'redux';
import { Platform } from 'react-native';
import { PermissionStatus, check, request, openSettings, PERMISSIONS } from 'react-native-permissions';
import { setPermissions } from './permissionSlice';


export const startCheckingPermission = () => {
    return async (dispatch: Dispatch) => {
        let permissionStatus: PermissionStatus;
        if (Platform.OS === 'ios') {
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }

        dispatch(setPermissions(permissionStatus));
    };
};

export const startAskingPermission = () => {
    return async (dispatch: Dispatch) => {
        let permissionStatus: PermissionStatus;
        if (Platform.OS === 'ios') {
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }

        if (permissionStatus === "blocked") {
            openSettings();
        }
        dispatch(setPermissions(permissionStatus));
    };
};
