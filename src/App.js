import React from 'react';
import {Provider} from 'react-redux';

import store from './store';
import ErrorBoundary from './ErrorBoundary';
import {Form} from './containers';

export default () => (
    <Provider store={store}>
        <ErrorBoundary>
            <Form />
        </ErrorBoundary>
    </Provider>
);
