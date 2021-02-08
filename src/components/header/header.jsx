import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { AppHeader, Brand } from './header.styles';

const Header = ({ siteTitle }) => (
    <AppHeader>
        <Link to="/">
            <Brand>{siteTitle}</Brand>
        </Link>
    </AppHeader>
);

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired
};

export default Header;