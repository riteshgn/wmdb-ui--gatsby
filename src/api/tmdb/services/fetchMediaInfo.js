import Api from '../tmdb.api';
import Utils from '../tmdb.utils';

export default async function fetchMediaInfo(content) {

    const response = await Api.fetchDetailsByTypeAndId(content);

    if (!response) {
        return content;
    }

    return Utils.getMediaInfo(content.type, response);

}