import React from 'react';
import TmdbLogo from '../../images/tmdb_logo_alt_short_blue.svg';
import { AppFooter, Content, Brand, TmdbImage } from './footer.styles';

const Footer = () => (
    <AppFooter>
        <Content>
            <Brand>WMDB</Brand>&nbsp;
            powered by APIs from&nbsp;
            <a
                href="https://www.themoviedb.org/documentation/api"
                target="_blank"
                rel="noreferrer"
            >
                <TmdbImage
                    src={TmdbLogo}
                    alt="TMDb"
                />
            </a>
        </Content>
    </AppFooter>
);

export default Footer;