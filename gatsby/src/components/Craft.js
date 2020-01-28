import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Img from 'gatsby-image/withIEPolyfill';

import style from './Craft.module.scss';

const Craft = ({name, children, images, alternate}) => (
    <div className={classnames(style.main, {[style.alternate]: alternate})}>
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
    alternate: PropTypes.bool,
    children: PropTypes.node,
};

Craft.defaultProps = {
    alternate: false,
}

export default Craft;
