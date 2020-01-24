import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import bootstrap from '../bootstrap.module.scss';
import style from './NavItem.module.scss';

const NavItem = ({children}) => (
    <li className={classnames(bootstrap.navItem, style.main)}>
        <a className={classnames(bootstrap.navLink, style.link)} href="#top">
            {children}
        </a>
    </li>
);

NavItem.propTypes = {
    children: PropTypes.node.isRequired,
}

export default NavItem;
