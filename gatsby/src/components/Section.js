import React from 'react';
import PropTypes from 'prop-types';

import bootstrap from '../bootstrap.module.scss';
import styles from './Section.module.scss';

import BackgroundImage from 'gatsby-background-image';

const Section = ({name, children, bgImage}) => {
    const content = (
        <div className={bootstrap.container}>
            {children}
        </div>
    );

    if (bgImage) {
        return (
            <BackgroundImage
                Tag="section"
                fluid={[styles.gradient, bgImage]}
                className={styles.main}
            >
                {content}
            </BackgroundImage>
        )
    } else {
        return (
            <section className={styles.main}>
                {content}
            </section>
        );
    }
};

Section.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
    bgImage: PropTypes.object,
};

export default Section;
