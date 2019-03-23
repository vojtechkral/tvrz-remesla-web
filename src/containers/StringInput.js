import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'reactstrap';
import * as R from 'ramda';

const StringInput = ({onChange, ...rest}) => (
    <Input onChange={R.pipe(R.prop('target'), R.prop('value'), onChange)} {...rest} />
);

StringInput.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default StringInput;
