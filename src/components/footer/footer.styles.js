import tw, { styled } from 'twin.macro';

export const AppFooter = styled.footer([
    tw`
        w-full
        h-24
        flex
        justify-center
        items-center
        background-secondary
    `
]);

export const Content = styled.p([
    tw`
        flex
        items-center
    `
]);

export const Brand = styled.span([
    tw`
        text-white
        text-lg
        font-header
    `
]);

export const TmdbImage = styled.img([
    tw`
        h-3
    `
])