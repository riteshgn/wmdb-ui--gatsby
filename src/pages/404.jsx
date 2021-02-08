import React from 'react';
import { Link } from 'gatsby';
import tw, { styled } from 'twin.macro';
import { Layout } from '../components/layout';

const Container = styled.div([
    tw`
        flex
        flex-col
        h-full
        items-center
        p-12
    `
])

const Alert = styled.h1([
    tw`
        text-3xl
    `
]);

const Message = styled.p([
    tw`
        mt-4
        text-lg
    `
])

const NotFoundPage = () => (
    <Layout>
        <Container>
            <Alert>Uh Oh! Looks like we are in Neverland...</Alert>
            <Message>
                Click <Link to="/">here</Link> to get back home.
            </Message>
        </Container>
    </Layout>
);

export default NotFoundPage;