import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { AppHeader, BrandImage, Brand } from './header.styles';
import Logo from '../../images/wmdb-logo.png';

const Header = ({ siteTitle }) => (
    <AppHeader>
        <BrandImage src={Logo} alt="WMDB"/>
        <Link to="/">
            <Brand>{siteTitle}</Brand>
        </Link>
    </AppHeader>
);

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired
};

export default Header;