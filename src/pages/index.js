import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import SEO from "../components/seo"
import {Section, Navbar, NavItem, FaqSection, TwoColumn} from '../components';
import {Footer, Masthead, Contact, Crafts} from '../containers';
import Register from '../register';

import './style.scss';

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
                    html
                }
            }
            register: file(relativePath: {eq: "register.md"}) {
                childMarkdownRemark {
                    html
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
                <div dangerouslySetInnerHTML={{__html: about.childMarkdownRemark.html}} />
            </Section>
            <Section
                name="info"
                bgImage={background.childImageSharp.fluid}
            >
                <h2>Informace</h2>
                <TwoColumn>
                    <FaqSection title="Kdy?">
                        <p>Středa 21.&nbsp;8. až sobota 24.&nbsp;8.</p>
                        <p>V&nbsp;základu počítáme, že se zdržíš na svůj vybraný blok řemesel,
                            můžeš ale přijet na libovolnou část akce. Pokud chceš přijet dříve
                            nebo odjet později, napiš nám to, prosím, do přihlášky.
                        </p>
                    </FaqSection>
                    <FaqSection title="Kde to bude?">
                        <p>V areálu zámeckého příkopu v&nbsp;Rosicích u&nbsp;Brna. Viz <a href="https://www.mapy.cz/s/3quqR">mapa</a>.</p>
                    </FaqSection>
                    <FaqSection title="Přihlašování">
                        <p>Každý den je rozdělen do bloků jednotlivých řemesel. V&nbsp;přihlášce
                            si zarezervuješ místo na jednom nebo více z&nbsp;nich. Každý blok
                            má omezený počet míst, abychom se ti mohli dostatečně věnovat.</p>
                    </FaqSection>
                    <FaqSection title="Za co platím">
                        <p>Platíš za každý blok řemesel, kterého se účastníš. V&nbsp;této ceně je
                            zahrnutý materiál, jídlo a náklady na organizaci akce. Taky z&nbsp;ní
                            budeme pokrývat další výdaje jako například dopravu a stravování
                            organizátorů.</p>
                        <p>Kromě toho máš možnost pomoct nám s&nbsp;pracemi v&nbsp;Příkopu a tím
                            si "odpracovat" část ceny akce. Bloky brigád najdeš v&nbsp;přihlášce
                            a za každý ti strhneme 300 Kč z&nbsp;ceny.</p>
                        <p>Na akci nic nevyděláváme, veškerý případný zisk půjde do údržby a zvelebování středověké vesničky v&nbsp;Příkopu.
                            Organizátoři a mistři pracují bez nároku na odměnu.</p>
                    </FaqSection>
                    <FaqSection title="Storno poplatky">
                        <p>Storno poplatky činí 30&nbsp;%, pokud se odhlásíš do 21.&nbsp;7., 50&nbsp;% do 11.&nbsp;8. a 90&nbsp;% do 20.&nbsp;8.
                        Ode dne započetí akce peníze nevracíme. V&nbsp;případě zrušení akce ze strany organizátorů vracíme 100&nbsp;% uhrazené částky.</p>
                    </FaqSection>
                    <FaqSection title="Jak je to s&nbsp;jídlem?">
                        <p>Naše černá kuchyně bude vařit po celou dobu akce. Kromě krátké pauzy na oběd
                            v&nbsp;řemeslných blocích nejsou přestavky, ale pokud budeš mít hlad,
                            přestávku si udělat můžeš, v&nbsp;kuchyni se vždycky něco najde. V&nbsp;ceně
                            je svačina a večeře, v&nbsp;sobotu i oběd (to samé, pokud budeš u&nbsp;nás
                                dopoledne na brigádě.</p>
                        <p>Po přihlášení ti pošleme dotazník, kam můžeš napsat, jestli máš potravinové alergie nebo zvláštní
                            požadavky (jsi vegetarián, &hellip;).</p>
                    </FaqSection>
                    <FaqSection title="Co si mám vzít s&nbsp;sebou?">
                        <p>Oblečení vhodné k&nbsp;práci. Může trochu načichnout kouřem.</p>
                    </FaqSection>
                    <FaqSection title="Můžu vzít někoho s&nbsp;sebou?">
                        <p>Areál příkpou má omezenou kapacitu. Pokud vás pojede více, přihlašte se, prosím, zvlášť.</p>
                    </FaqSection>
                    <FaqSection title="A&nbsp;co děti?">
                        <p>Požadujeme, aby účastníkům bylo alespoň 15 let. Mladší děti se můžou zúčastnit
                            pouze v&nbsp;doprovodu rodičů. Pokud chceš přijet s&nbsp;dětmi,
                            napiš nám to, prosím, do přihlášky.</p>
                        <p>V&nbsp;Příkopu jsou místa, která jsou potenciálně nebezpečná
                            (kovářská výheň, kahany, kuchyně, &hellip;) a organizátoři nebudou mít čas dávat na děti pozor.
                            Předpokládáme proto, že na ně budeš dohlížet. Pokud chceš vzít někoho jako
                            dozor (partnera/partnerku, babičku, &hellip;), nemusí se přihlašovat zvlášť,
                            jen nám to napiš a domluvíme se.</p>
                    </FaqSection>
                    <FaqSection title="Berete náhradníky?">
                        <p>Jsou všechna místa na řemeslném bloku, kterého se chceš zúčastnit, obsazená? Můžeš počkat,
                            jestli se nějaké bloky neuvolní. A&nbsp;nebo nám napiš na <a href="mailto:tvrz@tvrz.net">tvrz@tvrz.net</a> a
                            zkusíme se nějak domluvit.</p>
                    </FaqSection>
                    <FaqSection title="Vím přesně, co chci vytvořit. Bude to možné?">
                        <p>Před akcí se ještě můžeme pobavit o&nbsp;podrobnostech tvého výrobku, o&nbsp;tom co jde, co nejde,
                            co se stihnout dá a co ne. Vyčkej, až ti přijde dotazník.</p>
                    </FaqSection>
                    <FaqSection title="Můžu u&nbsp;vás přespat?">
                        <p>V&nbsp;Příkopu je omezený počet míst na spaní, takže ti to nemůžeme zaručit,
                            pokusíme se ti ale vyhovět. Napiš nám a nějak se domluvíme.</p>
                        <p>Spí se na slámě nebo na podlaze, budeš potřebovat vlastní spacák a karimatku.</p>
                    </FaqSection>
                </TwoColumn>
            </Section>
            <Section name="crafts">
                <Crafts />
            </Section>
            <Section name="register">
                <h2>Přihláška</h2>
                <div dangerouslySetInnerHTML={{__html: register.childMarkdownRemark.html}} />
                <Register />
            </Section>
            <Section name="contact">
                <Contact />
            </Section>
            <Footer />
        </>
    );
};
