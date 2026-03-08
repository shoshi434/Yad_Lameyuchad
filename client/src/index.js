import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './app/Store';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || '656773053150-141bhsg4jkled2837b45vheag64hlep6.apps.googleusercontent.com';

console.log('Google Client ID:', GOOGLE_CLIENT_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
