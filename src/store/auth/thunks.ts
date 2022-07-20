import AsyncStorage from '@react-native-async-storage/async-storage';

import { Dispatch } from 'redux';
import { remaxApi } from '../../api';
import { AuthData } from '../../interfaces/authInterfaces';
import { login, logout } from './authSlice';
// import from 'axios'; 'axios';

type DataUser = {
    email: string;
    password: string;
}

export const startLogin = (dataUser: DataUser) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await remaxApi.post<AuthData>('/auth/login/', dataUser);

            dispatch(login(data));
            
            await AsyncStorage.setItem('token', data.token.access);
            // await AsyncStorage.setItem('token-refresh', data.token.refresh);

        } catch (error: any) {
            console.log("Response API", error)
            console.log(error.response.detail);
        }
    };
};

export const checkToken = () => {
    return async (dispatch: Dispatch) => {
    const token = await AsyncStorage.getItem('token');
    const tokenRefresh = await AsyncStorage.getItem('token-refresh');
        
    // No token, no autenticado
    if ( !token || !tokenRefresh ) return dispatch(logout());

    // Hay token
    const resp = await remaxApi.post('/auth/login/refresh/',tokenRefresh);
    if ( resp.status !== 200 ) {
        return dispatch(logout());
    }
    
    await AsyncStorage.setItem('token', resp.data.token.access); 
    await AsyncStorage.setItem('token-refresh', resp.data.token.refresh);
    dispatch({ 
        type: 'signUp',
        payload: {
            token: resp.data.token,
            user: resp.data.usuario
        }
    });
    }
}

