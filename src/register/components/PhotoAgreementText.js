import React from 'react';
import styles from './PhotoAgreementText.module.scss';
import {graphql, useStaticQuery} from 'gatsby';
import {renderMarkdown} from '../../utils';

export default () => {
    const {consent: {childMarkdownRemark: {htmlAst}}} = useStaticQuery(graphql`
        query {
            consent: file(relativePath: {eq: "consent.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);
    return (
        <div className={styles.main}>
            {renderMarkdown(htmlAst)}
        </div>
    );
};
