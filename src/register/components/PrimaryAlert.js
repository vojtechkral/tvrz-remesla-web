import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import bootstrap from '../../bootstrap.module.scss';

const PrimaryAlert = ({children}) => (
    <div className={classnames(bootstrap.alert, bootstrap.alertPrimary)}>
        {children}
    </div>
);

PrimaryAlert.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrimaryAlert;
