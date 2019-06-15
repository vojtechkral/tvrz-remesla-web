import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import {Input} from 'reactstrap';

const Checkbox = ({onChange, value, ...rest}) => (
    <Input type="checkbox" checked={!!value} onChange={R.pipe(R.prop('target'), R.prop('checked'), onChange)} {...rest} />
);

Checkbox.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.bool.isRequired,
    ]).isRequired,
};

export default Checkbox;
