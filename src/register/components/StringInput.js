import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as R from 'ramda';

import bootstrap from '../../bootstrap.module.scss';

const StringInput = ({onChange, invalid, ...rest}) => (
    <input
        {...rest}
        type="text"
        className={classnames(bootstrap.formControl, {[bootstrap.isInvalid]: invalid})}
        onChange={R.pipe(R.prop('target'), R.prop('value'), onChange)}
    />
);

StringInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
};

export default StringInput;
