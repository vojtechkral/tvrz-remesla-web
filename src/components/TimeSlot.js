import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {cellWidth} from './variables.scss';
import IntervalContext from './IntervalContext';
import styles from './TimeSlot.scss';

const TimeSlot = ({start, end, children, disabled, active, onClick}) => {
    const interval = useContext(IntervalContext);
    const left = (start - interval.start) * cellWidth;
    const width = (end - start) * cellWidth;

    return (
        <div style={{left, width}} className={styles.wrapper}>
            <button
                type="button"
                className={classnames(styles.main, {
                    [styles.active]: active && !disabled,
                })}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        </div>
    );
};

TimeSlot.propTypes = {
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

TimeSlot.defaultProps = {
    disabled: false,
    active: false,
};

export default TimeSlot;
