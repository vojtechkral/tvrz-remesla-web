import React from 'react';
import PropTypes from 'prop-types';
import {FormFeedback, FormGroup} from 'reactstrap';
import {FieldLabel} from 'components';

const FieldLayout = ({input, meta, label, inputComponent: Component, ...rest}) => {
    const showError = meta.invalid && meta.touched;
    return (
        <FormGroup>
            {label && <FieldLabel for={input.name}>{label}</FieldLabel>}
            <Component {...input} invalid={showError} {...rest} id={input.name} />
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
    label: PropTypes.string,
};

FieldLayout.defaultProps = {
    label: null,
};

export default FieldLayout;
