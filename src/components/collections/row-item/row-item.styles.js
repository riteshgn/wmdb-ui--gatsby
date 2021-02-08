import tw, { styled } from 'twin.macro';

export const MediaCard = styled.div([
    tw`
        cursor-pointer
        py-4
        text-center
        sm:py-0
    `
]);

export const CardImage = styled.img([
    tw`
        object-scale-down
        rounded-lg
        w-full
        h-60
        max-h-60
        sm:h-20
        sm:max-h-20
        md:h-28
        md:max-h-28
        lg:h-36
        lg:max-h-36
        xl:h-48
        xl:max-h-48
    `
]);

export const CardContent = styled.div([
    tw`
        text-base
        sm:text-sm
        lg:text-base
        mt-1
        mx-2
    `
]);