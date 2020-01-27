import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import bootstrap from '../../bootstrap.module.scss';

const SubmitButton = ({disabled, ...rest}) => (
    <button
        {...rest}
        type="submit"
        disabled={disabled}
        className={classnames(bootstrap.btn, bootstrap.btnPrimary, {[bootstrap.disabled]: disabled})}
    />
);

SubmitButton.propTypes = {
    disabled: PropTypes.bool,
};

SubmitButton.defaultProps = {
    disabled: false,
};

export default SubmitButton;
