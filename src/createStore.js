import reduxFreeze from 'redux-freeze';
import {applyMiddleware, compose, createStore} from 'redux';
import * as R from 'ramda';
import saga from './saga';

export default (reducer, sagaMiddleware) => {
    const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line no-underscore-dangle
    const middlewareList = [sagaMiddleware];

    if (process.env.NODE_ENV === 'development') {
        middlewareList.push(reduxFreeze);
    }

    const middleware = compose(
        applyMiddleware(...middlewareList),
        reduxDevTools ? reduxDevTools() : R.identity,
    );

    const store = createStore(reducer, middleware);

    sagaMiddleware.run(saga);

    return store;
};
