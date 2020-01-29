import reduxFreeze from 'redux-freeze';
import {applyMiddleware, compose, createStore} from 'redux';
import * as R from 'ramda';

export default (reducer, sagaMiddleware) => {
    const reduxDevTools = process.env.node === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line no-underscore-dangle
    const middlewareList = [sagaMiddleware];

    if (process.env.NODE_ENV === 'development') {
        middlewareList.push(reduxFreeze);
    }

    const middleware = compose(
        applyMiddleware(...middlewareList),
        reduxDevTools ? reduxDevTools() : R.identity,
    );

    return createStore(reducer, middleware);
};
