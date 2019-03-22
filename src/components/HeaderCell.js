import React from 'react';
import PropTypes from 'prop-types';
import {cellWidth} from './variables.scss';
import styles from './HeaderCell.scss';
import {formatTime} from './util';

const getWidth = (start, end) => (end - start) * cellWidth;

const HeaderCell = ({start, end}) => (
    <div className={styles.main} style={{width: getWidth(start, end)}}>
        <div>{formatTime(start)}</div>
        <div>{formatTime(end)}</div>
    </div>
);

HeaderCell.propTypes = {
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
};

export default HeaderCell;
