import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TagTypes } from '../utils/enum';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');

      if (token) headers.set('Authorization', `Bearer ${token}`);

      return headers;
    }
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: [TagTypes.Employee_List]
});

export default baseApi;
