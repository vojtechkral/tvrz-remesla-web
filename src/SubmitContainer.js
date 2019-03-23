import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Alert} from 'reactstrap';
import {isSubmitted} from './selectors';
import SubmitButton from './SubmitButton';

const SubmitContainer = ({submitted}) => {
    if (submitted) {
        return <Alert color="primary">Děkujeme za přihlášku. Brzy ti pošleme e-mail s dalšími informacemi.</Alert>;
    } else {
        return <SubmitButton />;
    }
};

SubmitContainer.propTypes = {
    submitted: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    submitted: isSubmitted(state),
});

export default connect(mapStateToProps)(SubmitContainer);
