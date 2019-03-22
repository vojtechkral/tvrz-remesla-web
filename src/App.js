import React from 'react';
import AppProvider from './AppProvider';
import {Form} from './containers';

export default () => (
    <AppProvider>
        <Form />
    </AppProvider>
);
