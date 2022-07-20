import { StackNavigationProp } from "@react-navigation/stack";
import { AxiosError } from "axios";
import { Dispatch } from "redux";
import { remaxApi } from "../../api";
import { Contact, Office, Origin } from '../../interfaces/contactsInterfaces';
import { RootStackContactParamList } from "../../navigation/ContactsStack";
import { RootState } from '../store';
import { setLoading, addContact, deleteContact, updateContact, setOffices, setOrigins, setContacts } from "./contactSlice";

interface FormData {

    fname: string;
    lname: string;
    email: string;
    cellphone: string;
    office: number;
    origin: number;
    status: boolean;
    notes: string;
    id?: number;
    navigation: StackNavigationProp<RootStackContactParamList, "ContactAddScreen", undefined>;

}

export const startGettingContacts = () => {
    return async (dispatch: Dispatch) => {
        try {

            dispatch(setLoading(false));
            console.log('ejecting startGettingContacts');

            // esperar a la api
            const { data } = await remaxApi.get<Contact[]>('/client')
            // console.log(data)
            dispatch(setContacts(data));
            dispatch(setLoading(false));
            console.log('obteniendo contactos');

        } catch (error: any) {
            // console.log(error.response);
        }

    }

};

export const startAddingContact = ({ navigation, ...values }: FormData) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {

        try {
            dispatch(setLoading(true));
            const { user } = getState().auth
            const { data } = await remaxApi.post<Contact>('/client/create/', {
                agent:user?.id,
                ...values
            })
            dispatch(addContact(data));
            navigation.pop();
            dispatch(setLoading(false));
        } catch (err : any) {
            console.log(err.response.detail);
            // dispatch(setLoading(false));
            
        }

    }

};

export const startDeleteContact = (contact: Contact) => {
    return async (dispatch: Dispatch) => {

        try {
            const { data } = await remaxApi.delete<Contact>(`/client/${contact.id}/`)
            dispatch(deleteContact(data));

        } catch (error: any) {
            console.log(error.response.detail);
        }

    }
}

export const startUpdateContact = ({ navigation, id, ...values }: FormData) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {

        try {
           
            dispatch(setLoading(true));
            const { user } = getState().auth
            const { data } = await remaxApi.put<Contact>(`/client/${id}/`, {
                agent:user?.id,
                ...values
            })
            dispatch(updateContact(data));
            navigation.pop();
            dispatch(setLoading(false));
        } catch (err : any) {
            console.log(err.response.detail);
            
        }

    }

}

export const startGettingOffices = () => {
    return async (dispatch: Dispatch) => {
        try {

            const { data } = await remaxApi.get<Office[]>('/offices')

            dispatch(setOffices(data));

        } catch (error: any) {
            console.log(error.response.detail);
        }
    }
}

export const startGettingOrigins = () => {
    return async (dispatch: Dispatch) => {
        try {

            const { data } = await remaxApi.get<Origin[]>('/clientorigin')

            dispatch(setOrigins(data));

        } catch (error: any) {
            console.log(error.response.detail);
        }
    }
}
