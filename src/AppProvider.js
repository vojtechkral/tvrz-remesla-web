import React, {Component} from 'react';
import PropTypes from 'prop-types';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import RedBox from 'redbox-react';

import createStore from './createStore';
import reducer from './reducer';
import saga from './saga';

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
                return <RedBox error={error} />;
            }
            return 'Stalo se něco špatného.'; // TODO lepší chyba
        } else {
            return (
                <Provider store={this.store}>{children}</Provider>
            );
        }
    }
}
