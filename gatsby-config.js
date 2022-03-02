const sass = require('sass');

module.exports = {
    pathPrefix: '/tvrz-remesla-web',
    siteMetadata: {
        title: 'Řemesla na Tvrzi rosické',
        edition: 'III',
        description: 'Přijeď se do Rosic naučit základy řemesla a vyrobit si svůj vlastní výrobek!',
        author: 'Tvrz',
        year: 2020,
        email: 'tvrz@tvrz.net',
        fbEventId: '1427245124127722',
        fields: {
            name: 'entry.79134988',
            email: 'entry.386040003',
            message: 'entry.1040719032',
        },
        prices: {
            base: 0,
            med: 550,
            korale: 650,
            hrebenovka: 450,
            lucerna: 550,
            karetkyOpasek: 600,
            karetkyDrobne: 450,
            nuz: 750,
            pochva: 450,
            tasvice: 750,
        },
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                implementation: sass,
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Řemesla na Tvrzi rosické',
                short_name: 'Řemesla',
                start_url: '/',
                background_color: '#212529',
                theme_color: '#64a19d',
                display: 'minimal-ui',
                icon: 'src/images/favicon.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'Varela Round',
                    'Nunito',
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'crafts',
                path: `${__dirname}/src/crafts`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'texts',
                path: `${__dirname}/src/texts`,
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: ['remark-czech-preprocessor'],
            },
        },
    ],
};
