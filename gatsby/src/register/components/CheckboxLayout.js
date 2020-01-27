import React from 'react';
import PropTypes from 'prop-types';
import FieldLabel from './FieldLabel';

import bootstrap from '../../bootstrap.module.scss';

const CheckboxLayout = ({input, label, inputComponent: Component, ...rest}) => (
    <div className={bootstrap.formCheck}>
        <Component {...input} {...rest} id={input.name} />
        <FieldLabel className={bootstrap.formCheckLabel} name={input.name}>{label}</FieldLabel>
    </div>
);

CheckboxLayout.propTypes = {
    input: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    inputComponent: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default CheckboxLayout;
