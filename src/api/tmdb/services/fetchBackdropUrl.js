import Api from '../tmdb.api';
import Utils from '../tmdb.utils';

export default async function fetchBackdropUrl(content, strict = false) {
    const response = await Api.fetchDetailsByTypeAndId(content);

    function __logError(reason) {
        console.error(`${reason} for ${content.type} #${content.id}`);
    }

    if (!response) {
        __logError('No data available');
        return null;
    }

    if (response.backdrop_path) {
        return Utils.getFullImageUrl(response.backdrop_path, /*duotone*/true);
    }

    if (!strict && response.poster_path) {
        return Utils.getFullImageUrl(response.poster_path, /*duotone*/true);
    }

    __logError('No backdrop image found');
    return null;
}