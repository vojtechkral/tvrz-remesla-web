import * as R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {TextInput, PhotoAgreementText, Checkbox, CheckboxLayout, StringInput} from './components';
import {Field} from './containers';
import {required, validEmail} from './utils';
import submit from './submit';
import {getIntervals} from './selectors';
import {SubmitContainer, Sum} from './containers';
import {REGISTRATION_FORM} from './constants';
import {ErrorAlert, Center} from './components';
//import Schedule from './Schedule';

import bootstrap from '../bootstrap.module.scss';

const Form = ({handleSubmit, error}) => (
    <form className={bootstrap.w100} onSubmit={handleSubmit}>
        <div className={bootstrap.row}>
            <div className={bootstrap.colMd6}>
                <Field
                    name="name"
                    label="Jméno a příjmení"
                    placeholder="Tvoje jméno"
                    component={StringInput}
                    validate={[required]}
                    id="entry.353496457"
                />
            </div>
            <div className={bootstrap.colMd6}>
                <Field
                    name="email"
                    label="E-mail"
                    placeholder="Tvůj e-mail"
                    component={StringInput}
                    validate={[required, validEmail]}
                    id="entry.1825108357"
                />
            </div>
        </div>
        {/*<Schedule />*/}
        {error && <ErrorAlert>{error}</ErrorAlert>}
        <Center>
            <Sum />
        </Center>
        <Field
            component={TextInput}
            name="message"
            placeholder="Chceš nám něco vzkázat?"
            id="entry.241532143"
        />
        <Field
            name="photo-agreement"
            label="Uděluji souhlas s focením"
            component={Checkbox}
            layout={CheckboxLayout}
            id="entry.1097476779"
        />
        <PhotoAgreementText />
        <Center>
            <SubmitContainer />
        </Center>
    </form>
);

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
};

Form.defaultProps = {
    error: null,
};

const mapStateToProps = (state) => ({
    intervals: getIntervals(state),
});

export default R.compose(
    connect(mapStateToProps),
    reduxForm({
        form: REGISTRATION_FORM,
        onSubmit: submit,
        initialValues: {
            'photo-agreement': true,
        },
    }),
)(Form);
