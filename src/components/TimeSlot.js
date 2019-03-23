import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Manager, Popper, Reference} from 'react-popper';

import {cellWidth} from './variables.scss';
import IntervalContext from './IntervalContext';
import RowColorContext from './RowColorContext';
import Tooltip from './Tooltip';
import styles from './TimeSlot.scss';

const colorTable = {
    goldenrod: styles.goldenrod,
    copper: styles.copper,
    green: styles.green,
    steel: styles.steel,
    red: styles.red,
};

const TimeSlot = ({start, end, children, disabled, active, onClick, tooltip}) => {
    const interval = useContext(IntervalContext);
    const color = useContext(RowColorContext);
    const [showTooltip, setTooltipVisible] = useState(false);

    const left = (start - interval.start) * cellWidth;
    const width = (end - start) * cellWidth;

    return (
        <Manager>
            <div style={{left, width}} className={classnames(styles.wrapper, colorTable[color])}>
                <Reference>
                    {({ref}) => (
                        <button
                            ref={ref}
                            type="button"
                            className={classnames(styles.main, {
                                [styles.active]: active && !disabled,
                            })}
                            onClick={onClick}
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                            disabled={disabled}
                        >
                            {children}
                        </button>
                    )}
                </Reference>
                {tooltip && showTooltip && <Tooltip>{tooltip}</Tooltip>}
            </div>
        </Manager>
    );
};

TimeSlot.propTypes = {
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    tooltip: PropTypes.string,
};

TimeSlot.defaultProps = {
    disabled: false,
    active: false,
    tooltip: null,
};

export default TimeSlot;
