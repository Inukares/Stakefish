import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const EXCHANGES_URL = `https://api.coingecko.com/api/v3/`;

// Define a service using a base URL and expected endpoints
export const exchangesApi = createApi({
  reducerPath: 'exchangesApi',
  baseQuery: fetchBaseQuery({ baseUrl: EXCHANGES_URL }),
  endpoints: (builder) => ({
    getExchangeByName: builder.query({
      query: (name) => `exchanges/${name}`,
    }),
    getExchanges: builder.query({
      query: () => `exchanges`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetExchangeByNameQuery, useGetExchangesQuery } = exchangesApi;
