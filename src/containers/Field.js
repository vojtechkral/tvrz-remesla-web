import React from 'react';
import PropTypes from 'prop-types';
import {Field as ReduxField} from 'redux-form';
import FieldLayout from './FieldLayout';

const Field = ({component, ...rest}) => (
    <ReduxField
        {...rest}
        inputComponent={component}
        component={FieldLayout}
    />
);

Field.propTypes = {
    component: PropTypes.func.isRequired,
};

export default Field;
