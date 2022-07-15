import { Dispatch } from 'redux';
import { remaxApi } from '../../api';
import { ErrorAuth, User } from '../../interfaces/authInterfaces';
import { login } from './authSlice';
// import from 'axios'; 'axios';

type DataUser = {
    email: string;
    password: string;
}

export const startLogin = (dataUser: DataUser) => {
    return async (dispatch: Dispatch) => {

        try {
            const response = await remaxApi.post<User>('/auth/login/', dataUser)

            dispatch(login(response.data));

        } catch (error : any) {
            console.log(error.response.detail);
        }



    };
};
