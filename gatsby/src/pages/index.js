import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import SEO from "../components/seo"
import {Section, Navbar, NavItem} from '../components';
import {Footer, Masthead} from '../containers';

import './style.scss';

export default () => {
    const {background, site} = useStaticQuery(graphql`
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
        }
    `);
    return (
        <>
            <SEO lang="cs" />
            <Navbar title={site.siteMetadata.title}>
                <NavItem section="about">O akci</NavItem>
                <NavItem section="info">Informace</NavItem>
            </Navbar>
            <Masthead />
            <Section name="about">
                <h2>O akci</h2>
                <p>Řemesla na Tvrzi rosické je prázdninový workshop tradičních řemesel,
                    který tě po tři odpoledne od 21. do 23.&nbsp;srpna a po celý den v&nbsp;sobotu 24.&nbsp;srpna zároveň přenese
                    do 14.&nbsp;století na panství rosické.</p>
                <p>Zatímco si pan purkrabí bude vyřizovat účty s&nbsp;nezbedným písařem, ty se staneš
                    řemeslným učedníkem. Pod vedením zkušeného mistra si vyrobíš doplněk ke svému
                    historickému šatu, předmět denní potřeby, či si jen vyzkoušíš tradiční postupy.
                    Mezitím co budeš v&nbsp;potu tváře vyrábět svůj nůž, tepat měděný prsten pro svou
                    lásku či motat skleněné vinuté korálky pro radost, z&nbsp;otevřené kuchyně
                    se již bude linout vůně dušeniny. Když na chvíli odtrhneš svůj zrak od práce,
                    uslyšíš hovory poddaných při opravě doškové střechy a možná zjistíš, jaké životy
                    vedou lidé na panství.</p>
                <p>Díky kulisám středověké vesničky a interakcím kostýmovaným lidí zažiješ jedinečnou
                    atmosféru a navíc si odneseš vlastnoruční dílo.</p>
                <h3>O&nbsp;vesničce</h3>
                <p>Akce se bude konat v&nbsp;areálu zámku Rosic u&nbsp;Brna, takzvaném Příkopu,
                    který normálně slouží jako zázemí zážitkové akce <a href="http://www.tvrz.net">Tvrz</a>.
                    Celá akce bude probíhat v&nbsp;historických kulisách první poloviny čtrnáctého století,
                    ve kterém je Tvrz už tradičně zakotvena. Tomu odpovídá i třeba příprava jídla,
                    která probíhá na ohni s&nbsp;použitím odpovídajících surovin. Mimo to budou organizátoři
                    v&nbsp;historických kostýmech. Ty si však vyber takové oblečení, jaké je ti pohodlné.
                    Jenom pozor na praktičnost &ndash; počítej s&nbsp;tím, že se pohybuješ v&nbsp;prostředí
                    ohně, dřeva, uhlí, hlíny, slámy, &hellip;</p>
            </Section>
            <Section
                name="info"
                bgImage={background.childImageSharp.fluid}
            >
                <h2>Informace</h2>
            </Section>
            <Footer />
        </>
    );
};
