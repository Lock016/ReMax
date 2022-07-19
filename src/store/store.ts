import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { contactSlice } from './contacts';
import { permissionSlice } from './permissions';
import { propertiesSlice } from './properties';
export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        permisisons: permissionSlice.reducer,
        contacts: contactSlice.reducer,
        properties: propertiesSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
