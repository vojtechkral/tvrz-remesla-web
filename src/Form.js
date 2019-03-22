import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import {Form as BootstrapForm, Button, Row, Col} from 'reactstrap';
import {Field, StringInput} from 'containers';
import {required, validEmail} from 'utils';

import TestTable from './TestTable';

const Form = ({invalid, pristine, handleSubmit}) => (
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
        <TestTable />
        <div className="d-flex justify-content-center">
            <Button color="primary" type="submit" disabled={invalid || pristine}>Přihlásit se</Button>
        </div>
    </BootstrapForm>
);

Form.propTypes = {
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({form: 'registration'})(Form);
