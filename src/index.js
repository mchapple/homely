/*index.js*/

import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

ReactDOM.render(
    <GoogleOAuthProvider clientId="815780219767-rvnei141kuh9q3uadvqn7apkp0f5h6jv.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>,
    document.getElementById('root')
);