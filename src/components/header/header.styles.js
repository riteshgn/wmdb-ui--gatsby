import tw, { styled } from 'twin.macro';

export const AppHeader = styled.header([
    tw`
        p-4
        background-secondary
        flex
        items-center
    `
]);

export const BrandImage = styled.img([
    tw`
        h-8
        mr-2
    `
]);

export const Brand = styled.h1([
    tw`
        text-white
        text-lg
    `
]);