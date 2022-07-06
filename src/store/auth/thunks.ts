import { Dispatch } from 'redux';
import { remaxApi } from '../../api';
import { User } from '../../interfaces/authInterfaces';
import { login } from './authSlice';


type DataUser = {
    email: string;
    password: string;
}

export const startLogin = (dataUser: DataUser) => {
    return async (dispatch: Dispatch) => {
        const response = await remaxApi.post<User>('/auth/login/', dataUser)
            

        if (response?.status === 200) {
            dispatch(login(response.data));
        }
        else {
            console.log("Error")
        }
    };
};
