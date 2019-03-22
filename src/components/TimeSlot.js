import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {cellWidth} from './variables.scss';
import IntervalContext from './IntervalContext';
import styles from './TimeSlot.scss';

const TimeSlot = ({start, end, children}) => {
    const interval = useContext(IntervalContext);
    const left = (start - interval.start) * cellWidth;
    const width = (end - start) * cellWidth;

    return (
        <div style={{left, width}} className={styles.wrapper}>
            <div className={styles.main}>{children}</div>
        </div>
    );
};

TimeSlot.propTypes = {
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
};

export default TimeSlot;
