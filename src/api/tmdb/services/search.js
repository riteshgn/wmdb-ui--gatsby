import Api from '../tmdb.api';
import Utils from '../tmdb.utils';

export default async function search(contentType, queryValue) {
    const response = await Api.search(contentType, queryValue);

    if (!response || !response.results) {
        return [];
    }

    return Utils.getContentList(contentType, response.results);
}