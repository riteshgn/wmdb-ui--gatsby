import tw, { styled } from 'twin.macro';

export const Container = styled.div([
    tw`
        flex
        flex-col
        items-center
        justify-start
        gap-5
        max-w-4xl
    `
]);

export const InfoArticle = styled.article([
    tw`
        md:flex
        justify-center
        items-start
        gap-5
    `
]);

export const MediaImage = styled.img([
    tw`
        object-scale-down
        rounded-lg
        w-full
        md:w-auto
        max-h-96
    `
]);

export const InfoColumn = styled.div([
    tw`
        pt-10
        sm:p-10
        md:p-0
        max-w-prose
    `
]);

export const SectionWithSeparator = styled.section([
    tw`
        pb-4
        mb-4
        border-b
        border-purple-700
    `
]);

export const Title = styled.h1([
    tw`
        text-xl
        sm:text-2xl
        lg:text-4xl
    `
]);

export const SubTitle = styled.h2([
    tw`
        text-base
        sm:text-lg
        lg:text-2xl
        text-color-paragraph
    `
]);

export const Content = styled.p([
    tw`
        pt-2
        text-sm
        md:text-base
        sm:tracking-tight
    `
]);

export const JustifiedContent = styled.p([
    tw`
        sm:text-justify
        sm:tracking-tight
        pt-2
        text-sm
        md:text-base
    `
]);