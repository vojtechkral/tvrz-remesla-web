module.exports = {
    siteMetadata: {
        title: 'Řemesla na Tvrzi rosické',
        edition: 'III',
        description: 'Přijeď se do Rosic naučit základy řemesla a vyrobit si svůj vlastní výrobek!',
        author: 'Tvrz',
        year: 2020,
        email: 'tvrz@tvrz.net',
        fbEventId: '1427245124127722',
        fields: {
            name: 'entry.1606860186',
            email: 'entry.728518451',
            message: 'entry.912514459',
        },
        prices: {
            base: 0,
            med: 400,
            korale: 400,
            tkani: 350,
            lucerna: 350,
            karetkyOpasek: 500,
            karetkyDrobne: 350,
            nuz: 800,
            pochva: 300,
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
        'gatsby-plugin-sass',
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
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-139615876-1',
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
