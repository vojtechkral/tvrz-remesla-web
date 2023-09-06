import React from 'react';
import classnames from 'classnames';
import {graphql, useStaticQuery} from 'gatsby';
import bootstrap from '../bootstrap.module.scss';
import styles from './Footer.module.scss';

export default () => {
    const metadata = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    year
                }
            }
        }
    `);
    const {author, year} = metadata.site.siteMetadata;
    return (
        <footer className={classnames(bootstrap.small, styles.main)}>
            <div className={bootstrap.container}>
                Akce projektu <a href="http://www.tvrz.net">Tvrz</a> pořádána spolkem Hechtendorf.
                <br />
                <a href="https://www.instruktori.cz/zasady-zpracovani-osobnich-udaju/">Zásady zpracování osobních údajů.</a>
                <br />
                Copyright &copy; {author} {year}
            </div>
        </footer>
    )
};
