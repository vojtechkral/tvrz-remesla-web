import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {renderMarkdown} from '../utils';
import {FaqSection, TwoColumn} from '../components';

const renderNodes = (children) => renderMarkdown({type: 'root', children});

const isHeading = ({type, tagName}) => type === 'element' && tagName === 'h1';

export default () => {
    const {info: {childMarkdownRemark: {htmlAst: {children: childNodes}}}} = useStaticQuery(graphql`
        query {
            info: file(relativePath: {eq: "info.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);

    const firstHeading = childNodes.findIndex(isHeading);
    const sections = [];
    for (let index = firstHeading; index < childNodes.length; index += 1) {
        const node = childNodes[index];
        if (isHeading(node)) {
            sections.push({heading: node, children: []});
        } else {
            sections[sections.length - 1].children.push(node);
        }
    }

    return (
        <>
            {renderNodes(childNodes.slice(0, firstHeading))}
            {sections.map(({heading, children}, index) => (
                <FaqSection key={index} title={renderNodes(heading.children)}>
                    {renderNodes(children)}
                </FaqSection>
            ))}
        </>
    );
}

