module.exports = {
    siteMetadata: {
        title: 'WMDB',
        subTitle: 'The Wow Movie Database',
        siteUrl: 'https://www.wmdb.com',
        description: 'The Wow Movie Database (WMDB) - Browse for information on thousands of Movies and TV Shows. WMDb is powered by APIs from TMDb',
        author: '@riteshgn'
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'WMDB - The Wow Movie Database',
                short_name: 'WMDB',
                start_url: '/',
                background_color: '#0b0c10',
                theme_color: '#0b0c10',
                display: 'standalone',
                icon: 'src/images/wmdb-logo.png',
            },
        },
        'gatsby-plugin-offline',
    ],
};
