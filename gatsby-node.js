exports.onCreateWebpackConfig = ({ stage, actions, plugins }) => {
    actions.setWebpackConfig({
        // see: https://stackoverflow.com/questions/46934386/gatsbyjs-superagent-webpackerror-require-is-not-a-function/47949253#47949253
        // for answer to why this was done!!
        plugins: [
            plugins.define({
                'global.GENTLY': false
            })
        ]
    })
};

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;

    // see: https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/#configuring-pages-with-matchpath
    if (page.path.match(/^\/media/)) {
        page.matchPath = '/media/*';
        createPage(page);
    }
};