import * as R from 'ramda';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import {isPristine, isInvalid, isSubmitting} from 'redux-form';
import {REGISTRATION_FORM} from '../constants';

const mapStateToProps = (state) => ({
    disabled: R.or(
        isPristine(REGISTRATION_FORM)(state),
        isInvalid(REGISTRATION_FORM)(state),
        isSubmitting(REGISTRATION_FORM)(state),
    ),
});

const mergeProps = ({disabled}, {onClick}) => ({
    disabled,
    onClick,
    type: 'submit',
    color: 'primary',
    children: 'Přihlásit se',
});

export default connect(mapStateToProps, undefined, mergeProps)(Button);
