import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact, Office, Origin } from '../../interfaces/contactsInterfaces';


interface ContactState {
  contacts: Contact[];
  loading: boolean;
  activeContact: Contact | null;
  offices: Office[];
  origins: Origin[];
}

const initialState: ContactState = {
  contacts: [],
  loading: true,
  activeContact: null,
  offices: [],
  origins:[],
};


export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContacts: (state: ContactState, { payload }: PayloadAction<Contact[]>) => {
      state.contacts = payload;
    },
    addContact: (state: ContactState, { payload }: PayloadAction<Contact>) => {
      state.contacts.push(payload);
    },
    setLoading: (state: ContactState, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setActiveContact: (state: ContactState, { payload }: PayloadAction<Contact>) => {
      state.activeContact = payload;
    },
    updateContact: (state: ContactState, { payload }: PayloadAction<Contact>) => {
      state.contacts = state.contacts.map(contact => {
        if (contact.id === payload.id) {
          return payload;
        }
        return contact;
      });
    },
    deleteContact: (state: ContactState, { payload }: PayloadAction<Contact>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
      
    },
    setOffices: (state: ContactState, { payload }: PayloadAction<Office[]>) => {
      state.offices = payload;
    },
    setOrigins: (state: ContactState, { payload }: PayloadAction<Origin[]>) => {
      state.origins = payload;
    }

    
  }
});


// Action creators are generated for each case reducer function
export const {  setContacts,
                setActiveContact,
                updateContact,
                deleteContact,
                addContact,
                setLoading,
                setOffices,
                setOrigins } = contactSlice.actions;