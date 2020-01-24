import React, {createContext, useContext, useMemo} from 'react';
import PropTypes from 'prop-types';

const NavbarContext = createContext();

export const NavbarContextProvider = ({height, shrunk, children}) => {
    const value = useMemo(() => ({height, shrunk}), [height, shrunk]);
    return (
        <NavbarContext.Provider value={value}>
            {children}
        </NavbarContext.Provider>
    );
};

NavbarContextProvider.propTypes = {
    shrunk: PropTypes.bool.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
};

export const useNavbarContext = () => useContext(NavbarContext);
