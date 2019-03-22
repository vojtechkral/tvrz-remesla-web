import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';

import form from 'form';

const Field = ({label, name, value, onChange, placeholder, type}) => (
    <FormGroup>
        <Label for={name}>{label}</Label>
        <Input value={value} onChange={onChange} id={name} placeholder={placeholder} type={type} required />
    </FormGroup>
);

Field.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

const mapStateToProps = (state, {name}) => ({
    value: form.getValue(state, name),
});

const mapDispatchToProps = (dispatch, {name}) => ({
    onChange: (event) => dispatch(form.setValue(name, event.target.value)),
});

const ConnectedField = connect(mapStateToProps, mapDispatchToProps)(Field);

ConnectedField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
};

ConnectedField.defaultProps = {
    placeholder: '',
    type: 'text',
};

export default ConnectedField;
