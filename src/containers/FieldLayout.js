import React from 'react';
import PropTypes from 'prop-types';
import {FormFeedback, FormGroup, Label} from 'reactstrap';

const FieldLayout = ({input, meta, label, inputComponent: Component, ...rest}) => (
    <FormGroup>
        <Label for={input.name}>{label}</Label>
        <Component {...input} invalid={meta.invalid} {...rest} />
        {meta.invalid && <FormFeedback invalid>{meta.error}</FormFeedback>}
    </FormGroup>
);

FieldLayout.propTypes = {
    input: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    meta: PropTypes.shape({
        invalid: PropTypes.bool.isRequired,
        error: PropTypes.string,
    }).isRequired,
    inputComponent: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default FieldLayout;
