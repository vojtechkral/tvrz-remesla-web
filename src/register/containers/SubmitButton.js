import {connect} from 'react-redux';
import {isSubmitting} from 'redux-form';

import {SubmitButton} from '../components';
import {REGISTRATION_FORM} from '../constants';

const mapStateToProps = (state) => ({
    disabled: isSubmitting(REGISTRATION_FORM)(state),
});

const mergeProps = ({disabled}, {onClick}) => ({
    disabled,
    onClick,
    children: 'Přihlásit se',
});

export default connect(mapStateToProps, undefined, mergeProps)(SubmitButton);
