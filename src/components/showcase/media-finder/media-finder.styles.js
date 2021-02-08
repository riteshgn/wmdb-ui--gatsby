import tw, { styled } from 'twin.macro';

export const Dropdown = styled.div([
    tw`
        relative
        w-full
    `
]);

export const DropdownTrigger = styled.input([
    tw`
        w-full
        px-4
        py-2
        rounded-md
        text-gray-700
        text-sm
        sm:text-base
        border
        border-gray-700
    `
]);

export const DropdownMenu = styled.div([
    tw`
        absolute
        left-0
        top-full
        w-full
        pt-1
        z-30
    `
]);

export const DropdownItemsContainer = styled.div([
    tw`
        bg-white
        shadow
        w-full
        rounded-md
        py-2
        text-sm
        sm:text-base
    `
]);

export const DropdownItem = styled.div([
    tw`
        px-4
        py-1
    `
]);