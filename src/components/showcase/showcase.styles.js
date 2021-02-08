import tw, { styled, css } from 'twin.macro';

export const Hero = styled.section([
    tw`
        relative
        flex
        items-center
        justify-between
        rounded-lg
        z-10
    `,
    css`
        background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.1) 100%);
    `
]);

export const BackgroundImage = styled.img([
    tw`
        absolute
        w-full
        h-full
        object-cover
        object-center
        z-0
        rounded-lg
    `
]);

export const Body = styled.div([
    tw`
        w-full
        px-4
        py-32
        z-10
    `
]);

export const Heading = styled.h1([
    tw`
        text-xl
        lg:text-2xl
        mb-4
        text-white
        md:text-gray-700
    `
]);