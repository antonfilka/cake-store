import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userAgent } from 'api/agents';

interface UserState {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatarImage: string | null;
  role: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  avatarImage: '',
  role: '',
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthenticated: (state: UserState, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setAvatarImage: (state: UserState, action: PayloadAction<string | null>) => {
      state.avatarImage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userAgent.endpoints.signIn.matchFulfilled, (state, { payload }) => {
      if (payload.id && state.id === payload.id)
        return {
          ...state,
          ...payload,
        };
      return { ...state };
    });
  },
});

export const {
  reducer: userReducer,
  actions: { setAuthenticated, setAvatarImage },
} = userSlice;
