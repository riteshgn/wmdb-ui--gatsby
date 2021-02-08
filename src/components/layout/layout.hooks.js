import { useStaticQuery, graphql } from 'gatsby';

export function useSiteMetadata() {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return { data };
}