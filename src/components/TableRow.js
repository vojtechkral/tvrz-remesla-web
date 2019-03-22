import React from 'react';
import PropTypes from 'prop-types';
import style from './TableRow.scss';

const TableRow = ({children}) => (
    <div className={style.main}>
        {children}
    </div>
);

TableRow.propTypes = {
    children: PropTypes.node,
};

TableRow.defaultProps = {
    children: null,
};

export default TableRow;
