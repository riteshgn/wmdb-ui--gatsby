import tw, { styled } from 'twin.macro';

const commonStyles = tw`
    cursor-pointer
    ml-2
`;

export const Filters = styled.div([
    tw`
        flex
        text-color-paragraph
        font-header
        items-center
        justify-end
    `
]);

export const FilterActive = styled.p([
    commonStyles,
    tw`
        text-xl
        sm:text-2xl
        lg:text-3xl
    `
]);

export const FilterInactive = styled.p([
    commonStyles,
    tw`
        text-sm
        sm:text-base
        lg:text-xl
        underline
        italic
        opacity-50
    `
]);