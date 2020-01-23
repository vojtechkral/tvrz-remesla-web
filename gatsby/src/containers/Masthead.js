import React from 'react';
import classnames from 'classnames';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import bootstrap from '../bootstrap.module.scss';
import style from './Masthead.module.scss';

const split = (string) => {
    const separatorIndex = string.indexOf(' ');
    return [string.substr(0, separatorIndex), string.substr(separatorIndex + 1)];
}

export default () => {
    const {site, background} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    edition
                }
            }
            background: file(relativePath: {eq: "bg-masthead.jpg"}) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const [title, subtitle] = split(site.siteMetadata.title);

    return (
        <BackgroundImage
            tag="header"
            fluid={[style.gradient, background.childImageSharp.fluid]}
            className={style.main}
        >
            <div className={classnames(bootstrap.container, style.titleWrapper)}>
                <div className={style.titleArea}>
                    <h1 className={style.title}>{title}</h1>
                    <h2 className={style.subtitle}>{subtitle} {site.siteMetadata.edition}</h2>
                </div>
            </div>
        </BackgroundImage>
    )
};
