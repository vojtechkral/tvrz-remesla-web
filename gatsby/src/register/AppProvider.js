import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';

import {ErrorAlert} from './containers';
import createStore from './createStore';
import saga from './saga';
import reducer from './reducer';

export default class AppProvider extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    state = {
        error: null,
    };

    constructor(props) {
        super(props);

        const catchingReducer = (state, action) => {
            try {
                return reducer(state, action);
            } catch (e) {
                this.showError(e);
                return state;
            }
        };
        const sagaMiddleware = createSagaMiddleware();
        this.store = createStore(catchingReducer, sagaMiddleware);
        const sagaTask = sagaMiddleware.run(saga);
        sagaTask.toPromise().catch(this.showError);
    }

    showError = (error) => {
        console.error(error); // eslint-disable-line no-console
        // Sentry.captureException(error); FIXME
        if (this.updater.isMounted(this)) {
            this.setState({error});
        } else {
            this.state = {error};
        }
    };

    componentDidCatch(error) {
        this.showError(error);
    }

    render() {
        const {error} = this.state;
        const {children} = this.props;
        if (error) {
            if (process.env.NODE_ENV === 'development') {
                throw error;
            }
            return <ErrorAlert />;
        } else {
            return (
                <Provider store={this.store}>{children}</Provider>
            );
        }
    }
}
