import React from 'react';
import classnames from 'classnames';
import {graphql, useStaticQuery} from 'gatsby';

import bootstrap from '../../bootstrap.module.scss';

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
        <div className={classnames(bootstrap.alert, bootstrap.alertDanger)}>
            Něco se pokazilo. Zkus <a onClick={() => setTimeout(() => window.location.reload())} href="#register">obnovit</a> stránku.
            Pokud to nepomůže, napiš nám na <a href={`mailto:${email}`}>{email}</a>.
        </div>
    );
}
