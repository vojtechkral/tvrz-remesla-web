import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {animateScroll} from 'react-scroll';

import {useNavbarContext} from './navbarContext';

import bootstrap from '../bootstrap.module.scss';
import style from './Navbar.module.scss';

const Navbar = ({title, children}) => {
    const {setHeight, shrunk} = useNavbarContext();
    const [menuVisible, setMenuVisible] = useState(false);
    const setHeightRef = useCallback((element) => setHeight(element ? element.offsetHeight : 0), [setHeight]);
    const onBrandClick = (event) => {
        event.preventDefault();
        animateScroll.scrollToTop();
    }

    return (
        <nav
            className={classnames(
                style.main,
                bootstrap.navbar,
                bootstrap.navbarExpandLg,
                bootstrap.fixedTop,
                {[style.shrunk]: shrunk},
            )}
            ref={setHeightRef}
        >
            <div className={bootstrap.container}>
                <a
                    href="#"
                    className={classnames(style.brand, bootstrap.navbarBrand)}
                    onClick={onBrandClick}
                >
                    {title}
                </a>
                <button
                    type="button"
                    onClick={() => setMenuVisible((visible) => !visible)}
                    className={classnames(style.toggler, bootstrap.navbarToggler, bootstrap.navbarTogglerRight)}
                    aria-label="Menu"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div
                    className={classnames(
                        bootstrap.collapse,
                        bootstrap.navbarCollapse,
                        {[bootstrap.show]: menuVisible},
                    )}
                >
                    <ul className={classnames(bootstrap.navbarNav, bootstrap.mlAuto)}>
                        {children}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Navbar;
