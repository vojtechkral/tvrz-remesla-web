import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup} from 'reactstrap';
import {FieldLabel} from 'components';

const CheckboxLayout = ({input, label, inputComponent: Component, ...rest}) => (
    <FormGroup check>
        <Component {...input} {...rest} id={input.name} /><FieldLabel check for={input.name}>{label}</FieldLabel>
    </FormGroup>
);

CheckboxLayout.propTypes = {
    input: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    inputComponent: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default CheckboxLayout;
