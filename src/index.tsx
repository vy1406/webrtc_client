import './styles/main.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import { SnackBarContextProvider } from '@context/snackbarContext';
import { UserContextProvider } from '@context/userContext';
import { Provider } from 'react-redux';
import store from 'store/store';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <SnackBarContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SnackBarContextProvider>
      </UserContextProvider>
    </Provider>
  </React.StrictMode>
)

