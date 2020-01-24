import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import bootstrap from '../bootstrap.module.scss';
import style from './Navbar.module.scss';

const isScrolled = () => window.scrollY > 50;

const Navbar = ({title, children}) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [scrolled, setScrolled] = useState(isScrolled());
    useEffect(() => {
        const onScroll = () => {
            setScrolled(isScrolled());
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [setScrolled]);

    return (
        <nav
            className={classnames(
                style.main,
                bootstrap.navbar,
                bootstrap.navbarExpandLg,
                bootstrap.fixedTop,
                {[style.scrolled]: scrolled},
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
