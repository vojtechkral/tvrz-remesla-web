import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import {Craft} from '../components';

export default () => {
    const {crafts} = useStaticQuery(graphql`
        query {
            crafts: allMarkdownRemark (
                sort: {fields: [frontmatter___order]}
                filter: {frontmatter: {display: {eq: true}}}
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
                        html
                    }
                }
            }
        }
    `);

    return (
        <>
            {crafts.edges.map(({node: {html, frontmatter: {title, images, showcase}}}, i) => (
                <Craft
                    key={title}
                    name={title}
                    images={images}
                    showcase={showcase}
                    alternate={i % 2 === 1}
                >
                    <div dangerouslySetInnerHTML={{__html: html}}/>
                </Craft>
            ))}
        </>
    );
};
