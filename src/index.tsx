import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import { SnackBarContextProvider } from '@context/snackbarContext';
import { UserContextProvider } from '@context/userContext';

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <SnackBarContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackBarContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)

