import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RedBox from 'redbox-react';

export default class ErrorBoundary extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    state = {
        error: null,
    };

    static getDerivedStateFromError(error) {
        return {error};
    }

    render() {
        const {error} = this.state;
        const {children} = this.props;

        if (error) {
            if (process.env.NODE_ENV === 'development') {
                return <RedBox error={error} />;
            } else {
                return <div>Něco je špatně!</div>; // FIXME
            }
        } else {
            return children;
        }
    }

}
