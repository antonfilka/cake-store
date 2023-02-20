import { SignInRequestBody, SignInResponse, GetUserDataResponse } from 'api/models/user';
import { createApi } from '@reduxjs/toolkit/query/react';
import { TAGS, USER_API_ROUTES } from 'constants/index';
import { baseQuery } from './baseQuery';

export const userAgent = createApi({
  reducerPath: 'userAgent',
  baseQuery,
  tagTypes: [TAGS.USER_DATA_TAG],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    // TODO: remove when project api will be available
    // This api method is created just for test request to jsonplaceholder
    getUserData: builder.query<GetUserDataResponse, unknown>({
      query: () => ({
        url: 'https://jsonplaceholder.typicode.com/users/1',
        method: 'GET',
      }),
    }),
    signIn: builder.mutation<SignInResponse, SignInRequestBody>({
      query: (data) => ({
        url: USER_API_ROUTES.SIGN_IN,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetUserDataQuery, useSignInMutation } = userAgent;
