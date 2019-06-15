import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Field as ReduxField} from 'redux-form';
import {connect} from 'react-redux';
import {registerField} from 'actions';
import {isSubmitted} from 'selectors';
import FieldLayout from './FieldLayout';

const Field = ({component, onMount, layout, ...rest}) => {
    useEffect(onMount, []);
    return (
        <ReduxField
            {...rest}
            inputComponent={component}
            component={layout}
        />
    );
};

Field.propTypes = {
    component: PropTypes.func.isRequired,
    onMount: PropTypes.func.isRequired,
    layout: PropTypes.func,
};

Field.defaultProps = {
    layout: FieldLayout,
};

const mapStateToProps = (state) => ({
    disabled: isSubmitted(state),
});

const mapDispatchToProps = (dispatch, {name, id}) => ({
    onMount: () => {
        dispatch(registerField(name, id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
