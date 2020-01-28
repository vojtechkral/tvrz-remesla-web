import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import {Craft} from '../components';

export default () => {
    const {crafts} = useStaticQuery(graphql`
        query {
            crafts: allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            images {
                                childImageSharp {
                                    fluid (maxWidth: 1920) {
                                        ...GatsbyImageSharpFluid_tracedSVG
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
            {crafts.edges.map(({node}) => (
                <Craft
                    key={node.frontmatter.title}
                    name={node.frontmatter.title}
                    images={node.frontmatter.images}
                >
                    <div dangerouslySetInnerHTML={{__html: node.html}}/>
                </Craft>
            ))}
        </>
    );
};
