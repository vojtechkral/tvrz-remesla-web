import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF as faFacebook} from '@fortawesome/free-brands-svg-icons';
import classnames from 'classnames';
import {graphql, useStaticQuery} from 'gatsby';

import bootstrap from '../bootstrap.module.scss';
import style from './Contact.module.scss';
import button from '../button.module.scss';

export default () => {
    const metadata = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    email
                    fbEventId
                }
            }
        }
    `);
    const {email, fbEventId} = metadata.site.siteMetadata;
    return (
        <div className={style.main}>
            <h2>Kontakt</h2>
            <p>Pokud máš jakýkoli dotaz, neváhej se nám ozvat:</p>
            <p><a className={bootstrap.btnLg} href={`mailto:${email}`}>{email}</a></p>
            <div>
                <a
                    className={classnames(bootstrap.btn, bootstrap.btnOutlinePrimary, button.main, button.outline)}
                    href={`https://www.facebook.com/events/${fbEventId}/`}
                >
                    <FontAwesomeIcon icon={faFacebook} aria-hidden /> Sdílej<span className={bootstrap.srOnly}> na facebooku</span>
                </a>
            </div>
        </div>
    );
};
