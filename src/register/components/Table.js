import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {splitTime} from './util';
import HeaderCell from './HeaderCell';
import IntervalContext from './IntervalContext';
import styles from './Table.module.scss';

const Table = ({start, end, children, title, disabled}) => (
    <div className={styles.positioner}>
        <div>
            {title && <div className={styles.title}>{title}</div>}
            <div className={classnames(styles.wrapper, {[styles.disabled]: disabled})}>
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
        </div>
    </div>
);

Table.propTypes = {
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    children: PropTypes.node,
    title: PropTypes.string,
    disabled: PropTypes.bool,
};

Table.defaultProps = {
    children: null,
    title: null,
    disabled: false,
};

export default Table;
