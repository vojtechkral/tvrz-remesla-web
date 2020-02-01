import React from 'react';
import PropTypes from 'prop-types';
import {Element} from 'react-scroll';

import bootstrap from '../bootstrap.module.scss';
import styles from './Section.module.scss';

import BackgroundImage from 'gatsby-background-image';

const Section = ({name, children, bgImage}) => {

    const content = (
        <Element
            className={bootstrap.container}
            name={name}
        >
            {children}
        </Element>
    );

    if (bgImage) {
        return (
            <BackgroundImage
                Tag="section"
                fluid={[styles.gradient, bgImage]}
                className={styles.main}
                id={name}
            >
                {content}
            </BackgroundImage>
        )
    } else {
        return (
            <section
                id={name}
                className={styles.main}
            >
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
