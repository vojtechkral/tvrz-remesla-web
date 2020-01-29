import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import bootstrap from '../../bootstrap.module.scss';

const Checkbox = ({onChange, value, ...rest}) => (
    <input
        {...rest}
        type="checkbox"
        className={bootstrap.formCheckInput}
        checked={!!value}
        onChange={R.pipe(R.prop('target'), R.prop('checked'), onChange)}
    />
);

Checkbox.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.bool.isRequired,
    ]).isRequired,
};

export default Checkbox;
