import { Dispatch } from "redux";
import { RootState } from '../store';
import { setLoading, addContact, deleteContact, updateContact } from "./contactSlice";

export const startGettingContacts = () => {
    return async (dispatch: Dispatch) => {
        try {

            // dispatch(setLoading(true));
            // esperar a la api
            // const response = await remaxApi.post<User>('/auth/login/', dataUser)

            // dispatch(setContacts());
            dispatch(setLoading(false));
            console.log('obteniendo contactos');

        } catch (error: any) {
            console.log(error.response.detail);
        }

    }

};

export const startAddingContact = (contact: Contact) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {


        try {

            // const response = await remaxApi.post<Contact>('/auth/login/', contact)

            // dispatch(addContact(contact));

        } catch (error: any) {
            console.log(error.response.detail);
        }

    }

};

export const startDeleteContact = (id: string) => {
    return async (dispatch: Dispatch) => {
            
            try {
    
                // const response = await remaxApi.post<Contact>('/auth/login/', contact)
                    // cambiar por reponse
                 dispatch(deleteContact(id));
    
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
