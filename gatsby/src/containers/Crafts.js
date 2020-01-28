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
                >
                    <div dangerouslySetInnerHTML={{__html: node.html}}/>
                </Craft>
            ))}
        </>
    );
};
