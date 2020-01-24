import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {animateScroll} from 'react-scroll';

import {NavbarContextProvider} from './navbarContext';

import bootstrap from '../bootstrap.module.scss';
import style from './Navbar.module.scss';

const isScrolled = () => window.scrollY > 50;

const Navbar = ({title, children}) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [height, setHeight] = useState(0);
    const [shrunk, setShrunk] = useState(!isScrolled());
    useEffect(() => {
        const onScroll = () => {
            setShrunk(!isScrolled());
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [setShrunk]);
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
                        <NavbarContextProvider shrunk={shrunk} height={height}>
                            {children}
                        </NavbarContextProvider>
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
