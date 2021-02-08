import React from 'react';
import { Router } from '@reach/router';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { MediaInfo } from '../components/media-info';

const Media = () => (
    <Layout>
        <SEO title="Media Information" />
        <Router basepath="/media">
            <MediaInfo
                path="/movie/:id"
                mediaType="movie"
            />
            <MediaInfo
                path="/tv/:id"
                mediaType="tv"
            />
        </Router>
    </Layout>
);

export default Media;