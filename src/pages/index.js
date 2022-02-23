import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import SEO from "../components/seo"
import {Section, Navbar, NavItem, TwoColumn} from '../components';
import {Footer, Masthead, Contact, Crafts, Info} from '../containers';
import Register from '../register';

import './style.scss';
import {renderMarkdown} from '../utils';

export default () => {
    const {background, site, about, register} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            background: file(relativePath: {eq: "bg-info.jpg"}) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            about: file(relativePath: {eq: "about.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
            register: file(relativePath: {eq: "register.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);
    return (
        <>
            <SEO lang="cs" />
            <Navbar title={site.siteMetadata.title}>
                <NavItem target="about">O akci</NavItem>
                <NavItem target="info">Informace</NavItem>
                <NavItem target="crafts">Řemesla</NavItem>
                <NavItem target="register">Přihláška</NavItem>
                <NavItem target="contact">Kontakt</NavItem>
            </Navbar>
            <Masthead />
            <Section name="about">
                {renderMarkdown(about.childMarkdownRemark.htmlAst)}
            </Section>
            <Section
                name="info"
                bgImage={background.childImageSharp.fluid}
            >
                <h2>Informace</h2>
                <TwoColumn>
                    <Info />
                </TwoColumn>
            </Section>
            <Section name="crafts">
                <Crafts />
            </Section>
            <Section name="register">
                <h2>Přihláška</h2>
                {renderMarkdown(register.childMarkdownRemark.htmlAst)}
                {/*<Register />*/}
            </Section>
            <Section name="contact">
                <Contact />
            </Section>
            <Footer />
        </>
    );
};
