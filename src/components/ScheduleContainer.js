import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleContainer.scss';

const ScheduleContainer = ({children}) => (<div className={styles.main}>{children}</div>);

ScheduleContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ScheduleContainer;
