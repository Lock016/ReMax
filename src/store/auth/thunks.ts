import { Dispatch } from 'redux';
import { remaxApi } from '../../api';
import { User } from '../../interfaces/authInterfaces';
import { login } from './authSlice';
// import from 'axios'; 'axios';

type DataUser = {
    email: string;
    password: string;
}

export const startLogin = (dataUser: DataUser) => {
    return async (dispatch: Dispatch) => {
        console.log(dataUser);
        try {
            const response = await remaxApi.post<User>('/auth/login/', dataUser);
            console.log("Response API", response)
            dispatch(login(response.data));
        } catch (error: any) {
            console.log("Response API", error)
            console.log(error.response.detail);
        }
    };
};
