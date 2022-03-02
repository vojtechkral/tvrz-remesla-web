/* globals __SENTRY_RELEASE__ */
import React from 'react';
import * as Sentry from '@sentry/browser';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {NavbarContextProvider} from './src/components';
import 'whatwg-fetch';
import { fromPairs } from 'ramda';

config.autoAddCss = false;

function cyrb53(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed,
        h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
    h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

export const onClientEntry = () => {
    // IntersectionObserver polyfill for IE 11
    if (!('IntersectionObserver' in window)) {
        // eslint-disable-next-line no-unused-expressions
        import('intersection-observer');
    }

    if (process.env.NODE_ENV === 'production') {
        Sentry.init({
            release: __SENTRY_RELEASE__,
            dsn: 'https://123831066ab64274b0eb9a2e924833e3@sentry.io/1452667',
        });
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    fetch('https://www.cloudflare.com/cdn-cgi/trace')
        .then((response) => response.text())
        .then((text) => {
            const response = fromPairs(text.trim().split('\n').map((line) => line.split('=')));
            const now = new Date();
            const today = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
            const identifier = `${response.ip}|${navigator.userAgent}|${navigator.language}|${today}`
            const clientId = cyrb53(identifier);
            gtag('js', now);
            gtag('config', 'UA-139615876-1', {
                anonymize_ip: true,
                client_storage: 'none',
                client_id: clientId,
                page_path: window.location.hash,
            });
        });
}

export const wrapRootElement = ({element}) => (
    <NavbarContextProvider>
        {element}
    </NavbarContextProvider>
)
