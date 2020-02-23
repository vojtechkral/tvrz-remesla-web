import React from 'react';
import styles from './PhotoAgreementText.module.scss';
import {graphql, useStaticQuery} from 'gatsby';

export default () => {
    const {consent: {childMarkdownRemark: {html}}} = useStaticQuery(graphql`
        query {
            consent: file(relativePath: {eq: "consent.md"}) {
                childMarkdownRemark {
                    html
                }
            }
        }
    `);
    return (
        <div className={styles.main} dangerouslySetInnerHTML={{__html: html}} />
    );
};
