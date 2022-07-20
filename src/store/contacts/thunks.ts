import { Dispatch } from "redux";
import { remaxApi } from "../../api";
import { Contact, Office, Origin } from '../../interfaces/contactsInterfaces';
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

export const startAddingContact = ({ ...values }: FormData) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {


        try {
            //TODO: USAR EL GETSTATE PARA OBTENER EL ID DEL USUARIO, PERO HABLAR ANTES CON DAMIANNY
            const { data } = await remaxApi.post<Contact>('/client/create/', {
                //MANDAR VALUES Y EL AGENT QUE ES EL ID DE USUARIO
            })

            dispatch(addContact(data));

        } catch (error: any) {
            console.log(error.response.detail);
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

export const startUpdateContact = (contact: Contact) => {
    return async (dispatch: Dispatch) => {
        try {

            // const response = await remaxApi.post<Contact>('/auth/login/', contact)

            dispatch(updateContact(contact));

        } catch (error: any) {
            console.log(error.response.detail);
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
