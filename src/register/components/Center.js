import React from 'react';
import PropTypes from 'prop-types';

import style from './Center.module.scss';

const Center = ({children}) => (
    <div className={style.main}>
        {children}
    </div>
);

Center.propTypes = {
    children: PropTypes.node,
};

export default Center;
