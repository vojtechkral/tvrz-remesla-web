import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image/withIEPolyfill';

const Craft = ({name, children, images}) => (
    <div>
        <h1>{name}</h1>
        {children}
        {images && <Img fluid={images[1].childImageSharp.fluid}/>}
    </div>
);

Craft.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Craft;
