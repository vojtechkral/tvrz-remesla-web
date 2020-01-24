import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {scrollToElement} from './scroller';

import bootstrap from '../bootstrap.module.scss';
import style from './NavItem.module.scss';

const NavItem = ({target, children}) => {
    const onClick = (event) => {
        event.preventDefault();
        scrollToElement(target);
    }

    return (
        <li className={classnames(bootstrap.navItem, style.main)}>
            <a
                className={classnames(bootstrap.navLink, style.link)}
                href={`#${target}`}
                onClick={onClick}
            >
                {children}
            </a>
        </li>
    );
};

NavItem.propTypes = {
    target: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default NavItem;
