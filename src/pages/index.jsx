import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Showcase } from '../components/showcase';
import { Collections } from '../components/collections';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Showcase />
        <Collections />
    </Layout>
);

export default IndexPage;