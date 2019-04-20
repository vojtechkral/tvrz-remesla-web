import React from 'react';
import {render} from 'react-dom';
import SmoothScroll from 'smooth-scroll';
import SimpleLightbox from 'simple-lightbox';
import 'simple-lightbox/dist/simpleLightbox.css';

import attachTogglers from './attachTogglers';
import attachScrollListener from './attachScrollListener';
import App from './App';
import './style/index.scss';

attachTogglers();
attachScrollListener();

new SmoothScroll('a[href*="#"]', { // eslint-disable-line no-new, library API
    speed: 1000,
    easing: 'easeInOutCubic',
    offset: () => document.getElementById('mainNav').offsetHeight,
});

new SimpleLightbox({ // eslint-disable-line no-new, library API
    elements: '.craft-img',
    closeBtnCaption: 'Zavřít',
    nextBtnCaption: 'Další',
    prevBtnCaption: 'Předchozí',
    loadingCaption: 'Načítám...',
});

render(
    <App />,
    document.getElementById('register-form'),
);
