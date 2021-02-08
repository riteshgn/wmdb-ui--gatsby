import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyles } from 'twin.macro';
import { Global } from '@emotion/react';
import { Header } from '../header';
import { Footer } from '../footer';
import { BaseStyles, Container, Main } from './layout.styles';
import { useSiteMetadata } from './layout.hooks';

const Layout = ({ children }) => {
    const { data } = useSiteMetadata();

    return (
        <>
            <GlobalStyles />
            <Global styles={BaseStyles} />
            <Container>
                <Header
                    siteTitle={data.site.siteMetadata?.title || 'WMDB'}
                />
                <Main>{children}</Main>
                <Footer />
            </Container>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;