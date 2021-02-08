import Api from '../tmdb.api';
import Utils from '../tmdb.utils';

export default async function fetchContentByCategory(category, filter) {
    let response = {};
    let contentType = filter;

    switch (category) {
        case 'cat-trending':
            contentType = 'movie'; // TODO: very naive implementation; improvements?
            response = await Api.fetchTrending(contentType, filter);
            break;

        case 'cat-popular':
            response = await Api.fetchPopular(filter);
            break;

        case 'cat-toprated':
            response = await Api.fetchTopRated(filter);
            break;

        default:
            return new Promise(resolve => resolve({}));
    }

    if (!response || !response.results) {
        return [];
    }

    return Utils.getContentList(contentType, response.results, 4);
}