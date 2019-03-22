import React from 'react';
import PropTypes from 'prop-types';

import {splitTime} from './util';
import HeaderCell from './HeaderCell';
import IntervalContext from './IntervalContext';
import styles from './Table.scss';

const Table = ({start, end, children}) => (
    <div className={styles.wrapper}>
        <div className={styles.main}>
            <div className={styles.header}>
                {splitTime(start, end).map((interval) => (
                    <HeaderCell key={interval.start} start={interval.start} end={interval.end} />
                ))}
            </div>
            <IntervalContext.Provider value={{start, end}}>
                {children}
            </IntervalContext.Provider>
        </div>
    </div>
);

Table.propTypes = {
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    children: PropTypes.node,
};

Table.defaultProps = {
    children: null,
};

export default Table;
