import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ContactState {
  contacts: Contact[];
  loading: boolean;
  activeContact: Contact | null;
}

const initialState: ContactState = {
  contacts: [
    {
      id: "1",
      name: 'Johan Israel Gonzalez Vargas',
      number: '6182593051',
      email: 'jopi20101@gmail.com',

    },
    {
      id: "2",
      name: 'Johan Israel Gonzalez Vargas',
      number: '6182593051',
      email: 'jopi20101@gmail.com',

    },
    {
      id: "3",
      name: 'Johan Israel Gonzalez Vargas',
      number: '6182593051',
      email: 'jopi20101@gmail.com',

    },
    {
      id: "5",
      name: 'Johan Israel Gonzalez Vargas',
      number: '6182593051',
      email: 'jopi20101@gmail.com',

    },
    {
      id: '6',
      name: 'Johan Israel Gonzalez Vargas',
      number: '6182593051',
      email: 'jopi20101@gmail.com',

    },
    {
      id: '7',
      name: 'Johan Israel Gonzalez Vargas',
      number: '6182593051',
      email: 'jopi20101@gmail.com',

    },

  ],
  loading: true,
  activeContact: {
    id: "6",
    name: 'Johan Israel Gonzalez Vargas',
    number: '6182593051',
    email: 'jopi20101@gmail.com',
  },
};


export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContacts: (state: ContactState, { payload }: PayloadAction) => {
      state.contacts = payload;
    },
    addContact: (state: ContactState, { payload }: PayloadAction) => {
      state.contacts.push(payload);
    },
    setLoading: (state: ContactState, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setActiveContact: (state: ContactState, { payload }: PayloadAction) => {
      state.activeContact = payload;
    },
    updateContact: (state: ContactState, { payload }: PayloadAction) => {
      state.contacts = state.contacts.map(contact => {
        if (contact.id === payload.id) {
          return payload;
        }
        return contact;
      });
    },
    deleteContact: (state: ContactState, { payload }: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    }
  }
});


// Action creators are generated for each case reducer function
export const { setContacts, setActiveContact, updateContact, deleteContact, addContact, setLoading } = contactSlice.actions;