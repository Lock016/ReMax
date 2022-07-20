import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthData } from '../../interfaces/authInterfaces';

interface AuthState {
    status: 'checking' | 'not-authenticated' | 'authenticated';
    errorMessage: string | null;
    user: AuthData | null;
}
const initialState: AuthState = {
    status: 'not-authenticated',
    user: null,
    errorMessage: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state: AuthState, { payload }: PayloadAction<AuthData>) => {
            state.status = 'authenticated';
            state.user = payload;
        },

        logout: (state: AuthState) => {
            state.status = 'not-authenticated';
            state.user = null;
            state.errorMessage = null;
        },
        checkingCredentials: (state: AuthState) => {
            state.status = 'checking';
        },
    },
});

export const { login, checkingCredentials, logout } = authSlice.actions;
