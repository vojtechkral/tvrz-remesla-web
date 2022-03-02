import React from 'react';

export const onRenderBody = ({setHeadComponents}) => {
    setHeadComponents([<script async src="https://www.googletagmanager.com/gtag/js?id=UA-139615876-1" />]);
}
