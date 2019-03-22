import React from 'react';
import {render} from 'react-dom';
import SmoothScroll from 'smooth-scroll';

import attachTogglers from './attachTogglers';
import App from './App';
import './style/index.scss';

attachTogglers();

new SmoothScroll('a[href*="#"]', { // eslint-disable-line no-new, library API
    speed: 1000,
    easing: 'easeInOutCubic',
});

render(
    <App />,
    document.getElementById('register'),
);
