import React from 'react';
import PropTypes from 'prop-types';

import {useScrollElement} from './scroller';

import bootstrap from '../bootstrap.module.scss';
import styles from './Section.module.scss';

import BackgroundImage from 'gatsby-background-image';

const Section = ({name, children, bgImage}) => {
    const scrollRef = useScrollElement(name);

    const content = (
        <div
            className={bootstrap.container}
            ref={scrollRef}
        >
            {children}
        </div>
    );

    if (bgImage) {
        return (
            <BackgroundImage
                Tag="section"
                fluid={[styles.gradient, bgImage]}
                className={styles.main}
                id={`#${name}`}
            >
                {content}
            </BackgroundImage>
        )
    } else {
        return (
            <section
                id={`#${name}`}
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
