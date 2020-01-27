import React from 'react';
import PropTypes from 'prop-types';
import FieldLabel from './FieldLabel';

import bootstrap from '../../bootstrap.module.scss';

const FieldLayout = ({input, meta, label, inputComponent: Component, ...rest}) => {
    const showError = meta.invalid && meta.touched;
    return (
        <div className={bootstrap.formGroup}>
            {label && <FieldLabel for={input.name}>{label}</FieldLabel>}
            <Component {...input} invalid={showError} {...rest} id={input.name} />
            {showError && <div className={bootstrap.invalidFeedback}>{meta.error}</div>}
        </div>
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
