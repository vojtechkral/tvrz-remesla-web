import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import {Craft} from '../components';
import {renderMarkdown} from '../utils';

export default () => {
    const {crafts} = useStaticQuery(graphql`
        query {
            crafts: allMarkdownRemark (
                sort: {fields: [frontmatter___order]}
                filter: {
                    frontmatter: {display: {eq: true}}
                    fileAbsolutePath: {glob: "**/crafts/*.md"}
                }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            display
                            showcase
                            images {
                                childImageSharp {
                                    fluid (maxWidth: 1920) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        htmlAst
                    }
                }
            }
        }
    `);

    return (
        <>
            {crafts.edges.map(({node: {htmlAst, frontmatter: {title, images, showcase}}}, i) => (
                <Craft
                    key={title}
                    name={title}
                    images={images}
                    showcase={showcase}
                    alternate={i % 2 === 1}
                >
                    {renderMarkdown(htmlAst)}
                </Craft>
            ))}
        </>
    );
};
