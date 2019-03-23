import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import {Form as BootstrapForm, Row, Col} from 'reactstrap';
import {TextInput} from 'components';
import {Field, StringInput} from 'containers';
import {required, validEmail} from 'utils';
import {REGISTRATION_FORM} from './constants';
import {submit} from './actions';
import Schedule from './Schedule';
import SubmitContainer from './SubmitContainer';

const Form = ({handleSubmit}) => (
    <BootstrapForm className="w-100" onSubmit={handleSubmit}>
        <Row>
            <Col md={6}>
                <Field
                    name="name"
                    label="Jméno a příjmení"
                    placeholder="Tvoje jméno"
                    component={StringInput}
                    validate={[required]}
                />
            </Col>
            <Col md={6}>
                <Field
                    name="email"
                    label="E-mail"
                    placeholder="Tvůj e-mail"
                    component={StringInput}
                    validate={[required, validEmail]}
                />
            </Col>
        </Row>
        <Schedule />
        <Field
            component={TextInput}
            name="message"
            placeholder="Chceš nám něco vzkázat?"
        />
        <div className="d-flex justify-content-center">
            <SubmitContainer />
        </div>
    </BootstrapForm>
);

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: REGISTRATION_FORM,
    onSubmit: (values, dispatch) => dispatch(submit(values)),
})(Form);
