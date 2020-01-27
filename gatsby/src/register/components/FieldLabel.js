import React from 'react';

import style from './FieldLabel.module.scss';

export default ({className, ...rest}) => (
    <label {...rest} className={style.main} />
);
