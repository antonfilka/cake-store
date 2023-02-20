/* eslint-disable no-unused-vars */

export type SignInRequestBody = {
  email: string;
  password: string;
};

export type SignInResponse = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatarImage: string | null;
  role: string;
};

export type GetUserDataResponse = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export enum ROLES {
  USER = 'USER',
  AUTHOR = 'AUTHOR',
  ADMIN = 'ADMIN',
}
