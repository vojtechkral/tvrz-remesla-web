import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image/withIEPolyfill';

import style from './Craft.module.scss';

const Craft = ({name, children, images}) => (
    <div className={style.main}>
        <div className={style.description}>
            <h3 className={style.title}>{name}</h3>
            {children}
        </div>
        <div className={style.images}>
            {images && images.map(({childImageSharp}) => (
                <Img
                    key={childImageSharp.name}
                    fluid={childImageSharp.fluid}
                    className={style.image}
                />
            ))}
        </div>
    </div>
);

Craft.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Craft;
