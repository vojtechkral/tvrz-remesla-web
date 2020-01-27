import React from 'react';

import style from './FieldLabel.module.scss';

export default ({className, name, ...rest}) => (
    <label {...rest} htmlFor={name} className={style.main} />
);
