import React from 'react';
import PropTypes from 'prop-types';
import {Popper} from 'react-popper';
import styles from './Tooltip.scss';

const Tooltip = ({children}) => (
    <Popper>
        {({ref, style, placement, arrowProps}) => (
            <div style={style} ref={ref} className={styles.popup} data-placement={placement}>
                {children}
                <div ref={arrowProps.ref} style={arrowProps.style} className={styles.arrow}/>
            </div>
        )}
    </Popper>
);

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Tooltip;
