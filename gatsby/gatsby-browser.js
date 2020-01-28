import React from 'react';
import {NavbarContextProvider} from './src/components';

export const onClientEntry = () => {
    // IntersectionObserver polyfill for IE 11
    if (!('IntersectionObserver' in window)) {
        import('intersection-observer');
    }
}

export const wrapRootElement = ({element}) => (
    <NavbarContextProvider>
        {element}
    </NavbarContextProvider>
)
