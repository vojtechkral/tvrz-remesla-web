import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import {ShrinkContextProvider} from './shrinkContext';

import bootstrap from '../bootstrap.module.scss';
import style from './Navbar.module.scss';

const isScrolled = () => window.scrollY > 50;

const Navbar = ({title, children}) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [shrunk, setShrunk] = useState(!isScrolled());
    useEffect(() => {
        const onScroll = () => {
            setShrunk(!isScrolled());
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [setShrunk]);

    return (
        <nav
            className={classnames(
                style.main,
                bootstrap.navbar,
                bootstrap.navbarExpandLg,
                bootstrap.fixedTop,
                {[style.shrunk]: shrunk},
            )}
        >
            <div className={bootstrap.container}>
                <a href="#top" className={classnames(style.brand, bootstrap.navbarBrand)}>{title}</a>
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
                        <ShrinkContextProvider value={shrunk}>
                            {children}
                        </ShrinkContextProvider>
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
