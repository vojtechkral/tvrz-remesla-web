import React, {createContext, useContext, useMemo, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const NavbarContext = createContext({height: 0, shrunk: true, setHeight: () => {}});

export const NavbarContextProvider = ({children}) => {
    const [height, setHeight] = useState(0);
    const [shrunk, setShrunk] = useState(true);
    const value = useMemo(() => ({height, shrunk, setHeight}), [height, shrunk, setHeight]);

    useEffect(() => {
        const onScroll = () => {
            setShrunk(window.scrollY < 50);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, [setShrunk]);

    return (
        <NavbarContext.Provider value={value}>
            {children}
        </NavbarContext.Provider>
    );
};

NavbarContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useNavbarContext = () => useContext(NavbarContext);
