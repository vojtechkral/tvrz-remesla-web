import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import {Form as BootstrapForm, Button, Row, Col} from 'reactstrap';
import Field from './Field';
import StringInput from './StringInput';

const Form = ({handleSubmit}) => (
    <BootstrapForm className="w-100" onSubmit={handleSubmit}>
        <Row>
            <Col md={6}>
                <Field name="name" label="Jméno a příjmení" placeholder="Tvoje jméno" component={StringInput} />
            </Col>
            <Col md={6}>
                <Field name="email" type="email" label="E-mail" placeholder="Tvůj e-mail" component={StringInput} />
            </Col>
        </Row>
        <div className="d-flex justify-content-center">
            <Button color="primary" type="submit">Přihlásit se</Button>
        </div>
    </BootstrapForm>
);

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({form: 'registration'})(Form);
