import { useState, useEffect } from 'react';

import { TmdbApi } from '../../api/tmdb';

async function _fetchMediaInfo(mediaType, id, setMediaInfo) {
    setMediaInfo(await TmdbApi.fetchMediaInfo({ type: mediaType, id}));
}

export function useMediaInfo(mediaType, id) {
    const [mediaInfo, setMediaInfo] = useState({
        type: mediaType,
        id
    });

    useEffect(() => {
        _fetchMediaInfo(mediaType, id, setMediaInfo);
    }, [mediaType, id]);

    return mediaInfo;
}