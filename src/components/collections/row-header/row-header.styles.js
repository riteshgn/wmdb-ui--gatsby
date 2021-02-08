import tw, { styled } from 'twin.macro';

export const Container = styled.div([
    tw`
        flex
        justify-between
        items-start
    `
]);

export const RowHeader = styled.h1([
    tw`
       text-xl
       sm:text-2xl
       lg:text-3xl
    `
]);