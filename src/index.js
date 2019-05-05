import React from 'react';
import {render} from 'react-dom';
import * as Sentry from '@sentry/browser';
import SmoothScroll from 'smooth-scroll';
import SimpleLightbox from 'simple-lightbox';
import 'simple-lightbox/dist/simpleLightbox.css';

import attachTogglers from './attachTogglers';
import attachScrollListener from './attachScrollListener';
import App from './App';
import './style/index.scss';


Sentry.init({
    dsn: process.env.NODE_ENV === 'production' ? 'https://123831066ab64274b0eb9a2e924833e3@sentry.io/1452667' : null,
});

attachTogglers();
attachScrollListener();

new SmoothScroll('a[href*="#"]', { // eslint-disable-line no-new, library API
    speed: 1000,
    easing: 'easeInOutCubic',
    offset: () => document.getElementById('mainNav').offsetHeight,
});

Array.from(document.getElementsByClassName('craft')).forEach((craft) => {
    new SimpleLightbox({ // eslint-disable-line no-new, library API
        elements: craft.getElementsByClassName('craft-img'),
        closeBtnCaption: 'Zavřít',
        nextBtnCaption: 'Další',
        prevBtnCaption: 'Předchozí',
        loadingCaption: 'Načítám...',
    });
});

render(
    <App />,
    document.getElementById('register-form'),
);
