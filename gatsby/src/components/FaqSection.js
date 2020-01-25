import React from 'react';
import PropTypes from 'prop-types';

import style from './FaqSection.module.scss';

const FaqSection = ({title, children}) => (
    <div className={style.main}>
        <dt className={style.question}>{title}</dt>
        <dd className={style.answer}>{children}</dd>
    </div>
);

FaqSection.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default FaqSection;
