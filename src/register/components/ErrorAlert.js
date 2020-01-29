import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import bootstrap from '../../bootstrap.module.scss';

const ErrorAlert = ({children}) => (
    <div className={classnames(bootstrap.alert, bootstrap.alertDanger)}>
        {children}
    </div>
)

ErrorAlert.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorAlert;
