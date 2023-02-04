import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { MainLayout } from 'layouts';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </React.StrictMode>
);
