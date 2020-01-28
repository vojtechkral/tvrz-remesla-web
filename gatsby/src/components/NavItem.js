import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ScrollLink from './ScrollLink';
import {useNavbarContext} from './navbarContext';

import bootstrap from '../bootstrap.module.scss';
import style from './NavItem.module.scss';

const NavItem = ({target, children}) => {
    const {shrunk} = useNavbarContext();

    return (
        <li className={classnames(bootstrap.navItem, style.main)}>
            <ScrollLink
                spy
                hashSpy
                smooth
                className={classnames(
                    bootstrap.navLink,
                    style.link,
                    {[style.shrunk]: shrunk}
                )}
                href={`#${target}`}
                to={target}
                activeClass={style.active}
            >
                {children}
            </ScrollLink>
        </li>
    );
};

NavItem.propTypes = {
    target: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default NavItem;
