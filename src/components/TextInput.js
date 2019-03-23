import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'reactstrap';
import * as R from 'ramda';
import styles from './TextInput.scss';

const TextInput = ({onChange, ...rest}) => (
    <Input {...rest} type="textarea" onChange={R.pipe(R.prop('target'), R.prop('value'), onChange)} className={styles.main} />
);

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default TextInput;
