import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {ErrorAlert} from '../components';

export default () => {
    const {site} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    email
                }
            }
        }
    `);
    const {email} = site.siteMetadata;
    return (
        <ErrorAlert>
            Něco se pokazilo. Zkus <a onClick={() => setTimeout(() => window.location.reload())} href="#register">obnovit</a> stránku.
            Pokud to nepomůže, napiš nám na <a href={`mailto:${email}`}>{email}</a>.
        </ErrorAlert>
    );
}
