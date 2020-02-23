import {createElement, Fragment} from 'react';
import RehypeReact from 'rehype-react';

export const createMarkdownRenderer = (components = {}) => new RehypeReact({
    createElement,
    Fragment,
    components,
}).Compiler;

export const renderMarkdown = createMarkdownRenderer();
