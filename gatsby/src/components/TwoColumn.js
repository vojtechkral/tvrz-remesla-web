import React from 'react';
import PropTypes from 'prop-types';

import style from './TwoColumn.module.scss';

const TwoColumn = ({children}) => (
    <div className={style.main}>
        {children}
    </div>
)

TwoColumn.propTypes = {
    children: PropTypes.node,
};

export default TwoColumn;
