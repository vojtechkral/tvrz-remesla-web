import React from 'react';
import PropTypes from 'prop-types';
import {Field as ReduxField} from 'redux-form';
import {connect} from 'react-redux';
import FieldLayout from './FieldLayout';
import {isSubmitted} from '../selectors';

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

const mapStateToProps = (state) => ({
    disabled: isSubmitted(state),
});

export default connect(mapStateToProps)(Field);
