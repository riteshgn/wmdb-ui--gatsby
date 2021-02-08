import tw, { styled, css } from 'twin.macro';

export const BaseStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Goldman:wght@100;300;400;700;900&family=Quattrocento+Sans:wght@100;300;400;700;900&display=swap');
`;

export const Container = styled.div([
    tw`
        flex
        flex-col
        min-h-screen
    `
]);

export const Main = styled.main([
    tw`
        p-12
        max-w-7xl
        self-center
        flex-grow
    `
]);