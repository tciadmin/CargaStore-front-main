import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './Routes/index';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import store from './Redux/Store';
import theme from '../theme';
import AlertMessages from './Components/AlertMessages/AlertMessages';
import 'react-phone-input-2/lib/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AlertMessages />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
