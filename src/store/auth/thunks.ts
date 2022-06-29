import { Dispatch } from 'redux';
import { remaxApi } from '../../api';
import { User } from '../../interfaces/authInterfaces';
import { login } from './authSlice';


type DataUser = {
    email: string;
    password: string;
}

export const startLogin = (dataUser: DataUser) => {
    console.log("Aca ando")
    console.log("Data user", dataUser)
    return async (dispatch: Dispatch) => {
        const response = await remaxApi.post<User>('/auth/login/', dataUser)
            .then(response => {
                return response
            })
            .catch(error => {
                console.log(error)
            })

        if (response?.status === 200) {
            dispatch(login(response.data));
        }
        else {
            console.log("Error")
        }
    };
};
