import React from 'react';
import PropTypes from 'prop-types';

import bootstrap from './bootstrap.module.scss';

const Section = ({children}) => (
    <section>
        <div className={bootstrap.container}>
            {children}
        </div>
    </section>
);

Section.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Section;
