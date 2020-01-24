import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import bootstrap from '../bootstrap.module.scss';
import style from './Navbar.module.scss';

const Navbar = ({title, children}) => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <nav
            className={classnames(
                style.main,
                bootstrap.navbar,
                bootstrap.navbarExpandLg,
                bootstrap.fixedTop,
            )}
        >
            <div className={bootstrap.container}>
                <a href="#top" className={classnames(style.brand, bootstrap.navbarBrand)}>{title}</a>
                <button
                    type="button"
                    onClick={() => setMenuVisible((visible) => !visible)}
                    className={classnames(style.toggler, bootstrap.navbarToggler, bootstrap.navbarTogglerRight)}
                >
                    Menu <i className="fas fa-bars"></i>
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
