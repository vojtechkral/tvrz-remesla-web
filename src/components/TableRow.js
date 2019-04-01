import React from 'react';
import PropTypes from 'prop-types';
import style from './TableRow.scss';
import RowColorContext from './RowColorContext';

const TableRow = ({children, color}) => (
    <div className={style.main}>
        <RowColorContext.Provider value={color}>
            {children}
        </RowColorContext.Provider>
    </div>
);

TableRow.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(['goldenrod', 'copper', 'green', 'steel', 'red', 'purple']),
};

TableRow.defaultProps = {
    children: null,
    color: 'goldenrod',
};

export default TableRow;
