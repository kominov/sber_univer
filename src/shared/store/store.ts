import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { productsApi } from './api/productsApi';
import { rootReducer } from './reducers/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, productsApi.middleware]),
});
