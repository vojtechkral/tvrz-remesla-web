import React from 'react';
import {Form as BootstrapForm, Button, Row, Col} from 'reactstrap';
import Field from './Field';

const Form = () => (
    <BootstrapForm className="w-100" onSubmit={() => alert('Sumbit')}>
        <Row>
            <Col md={6}>
                <Field name="name" label="Jméno a příjmení" placeholder="Tvoje jméno" />
            </Col>
            <Col md={6}>
                <Field name="email" type="email" label="E-mail" placeholder="Tvůj e-mail" />
            </Col>
        </Row>
        <div className="d-flex justify-content-center">
            <Button color="primary" type="submit">Přihlásit se</Button>
        </div>
    </BootstrapForm>
);

export default Form;
