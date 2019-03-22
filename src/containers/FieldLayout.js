import React from 'react';
import PropTypes from 'prop-types';
import {FormFeedback, FormGroup, Label} from 'reactstrap';

const FieldLayout = ({input, meta, label, inputComponent: Component, ...rest}) => {
    const showError = meta.invalid && meta.touched;
    return (
        <FormGroup>
            <Label for={input.name}>{label}</Label>
            <Component {...input} invalid={showError} {...rest} />
            {showError && <FormFeedback>{meta.error}</FormFeedback>}
        </FormGroup>
    );
};

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
