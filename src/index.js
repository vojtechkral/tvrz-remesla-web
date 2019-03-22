import React from 'react';
import {render} from 'react-dom';

import attachTogglers from './attachTogglers';
import App from './App';
import './style/index.scss';

attachTogglers();

render(
    <App />,
    document.getElementById('login-form'),
);
