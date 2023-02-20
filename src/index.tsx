import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'store';
import ReactDOM from 'react-dom/client';
import { MainLayout } from 'layouts';
import React from 'react';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
