import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'reactstrap';

const StringInput = ({onChange, ...rest}) => (
    <Input onChange={(event) => onChange(event.target.value)} {...rest} />
);

StringInput.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default StringInput;
