import { useState } from 'react';

export function useInitialCategories() {
    const [categories] = useState({
        'cat-trending': {
            name: 'Trending',
            filters: [
                { id: 'day', name: 'Today' },
                { id: 'week', name: 'This Week' },
            ]
        },
        'cat-popular': {
            name: 'Most Popular',
            filters: [
                { id: 'movie', name: 'Movie' },
                { id: 'tv', name: 'TV' },
            ]
        },
        'cat-toprated': {
            name: 'Top Rated',
            filters: [
                { id: 'movie', name: 'Movie' },
                { id: 'tv', name: 'TV' },
            ]
        }
    });

    return categories;
};