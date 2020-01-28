import React from 'react';
import PropTypes from 'prop-types';

const Craft = ({name, children}) => (
    <div>
        <h1>{name}</h1>
        {children}
    </div>
);

Craft.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Craft;
