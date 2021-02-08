import { useState, useEffect } from 'react';

import { TmdbApi } from '../../../api/tmdb';

// we need to pull information for a category and a filter only once
// no need to query the API again for its data
// hence a simple in-memory cache which will hold the results
const contentCache = {};

async function _fetchContentByCategory(categoryId, filterId, setContentList) {
    if (!(categoryId in contentCache)) {
        contentCache[categoryId] = {}
    }

    if (!(filterId in contentCache[categoryId])) {
        contentCache[categoryId][filterId] = await TmdbApi.fetchContentByCategory(categoryId, filterId);
    }

    setContentList(contentCache[categoryId][filterId]);
}

export function useContentByCategory(categoryId, filterId) {
    const [contentList, setContentList] = useState([]);

    useEffect(() => {
        _fetchContentByCategory(categoryId, filterId, setContentList);
    }, [categoryId, filterId])

    return contentList;
}
