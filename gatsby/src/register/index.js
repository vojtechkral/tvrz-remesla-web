import React from 'react';

import AppProvider from './AppProvider';
import Form from './Form';

export default () => typeof window !== 'undefined' && (
    <AppProvider>
        <Form />
    </AppProvider>
)
