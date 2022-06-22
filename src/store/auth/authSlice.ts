import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    status: 'checking' | 'not-authenticated' | 'authenticated';
    uid: string | null;
    email: string | null;
    name: string | null;
    errorMessage: string | null;
}
const initialState: AuthState = {
    status: 'checking',
    uid: null,
    email: null,
    name: null,
    errorMessage: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.name = payload.name;
            state.errorMessage = payload.errorMessage;
        },

        logout: (state) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.name = null;
            state.errorMessage = null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
            state.uid = null;
            state.email = null;
            state.name = null;
            state.errorMessage = null;
        },
    },
});

export const { login, checkingCredentials, logout } = authSlice.actions;
