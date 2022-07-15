import { createSlice } from '@reduxjs/toolkit';


interface ContactState {
    contacts: Contact[];
    loading: boolean;
    activeContact: Contact | null;
}

const initialState: ContactState = {
    contacts: [],
    loading: true,
    activeContact: null,
};


export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setContacts: (state, action) => {
            state.contacts = action.payload;
            state.loading = false;
        },
        setActiveContact: (state, action) => {
            state.activeContact = action.payload;
        },
        updateContact: (state, action) => {
            state.contacts = state.contacts.map(contact => {
                if (contact.id === action.payload.id) {
                    return action.payload;
                }
                return contact;
            });
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
            state.loading = true;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setContacts, setActiveContact, updateContact, deleteContact } = contactSlice.actions;