import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Link} from 'react-scroll';

import {useIsShrunk} from './shrinkContext';

import bootstrap from '../bootstrap.module.scss';
import style from './NavItem.module.scss';

const NavItem = ({target, children}) => {
    const shrunk = useIsShrunk();
    return (
        <li className={classnames(bootstrap.navItem, style.main)}>
            <Link
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
            </Link>
        </li>
    );
};

NavItem.propTypes = {
    target: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default NavItem;
