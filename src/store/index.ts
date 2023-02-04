/* eslint-disable no-use-before-define */
import { AnyAction, combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userAgent } from 'api/agents';
import { userReducer } from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [userAgent.reducerPath],
};

const appReducer = combineReducers({
  user: userReducer,
  [userAgent.reducerPath]: userAgent.reducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'clear/persist') {
    storage.removeItem('persist:root');

    state = {};
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const persistedSetupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(userAgent.middleware),
  });
};

export const store = persistedSetupStore();

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof persistedSetupStore>;
export type AppDispatch = typeof store.dispatch;
