import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_API } from 'constants/index';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});
