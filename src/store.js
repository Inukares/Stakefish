import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { exchangesApi } from './services/exchangesApi';

export const store = configureStore({
  // Add the generated reducer as a specific top-level slice
  reducer: {
    [exchangesApi.reducerPath]: exchangesApi.reducer,
  },
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exchangesApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
