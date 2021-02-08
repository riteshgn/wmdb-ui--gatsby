module.exports = {
    siteMetadata: {
        title: 'WMDB',
        subTitle: 'The Wow Movie Database',
        siteUrl: `https://www.wmdb.com`,
        description: 'The Wow Movie Database (WMDB) - Browse for information on thousands of Movies and TV Shows. WMDb is powered by APIs from TMDb',
        author: '@riteshgn'
    },
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/wmdb-logo.png",
            },
        },
    ],
};
