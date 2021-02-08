import * as Constants from './tmdb.constants';

const Utils = {
    getFullImageUrl,
    getContentList,
    getMediaInfo
}

export default Utils;

/////////////////////////////////////////////////////////

function getFullImageUrl(imagePath, duotone = false) {
    if (!imagePath) {
        return null;
    }

    const contextPath = duotone ? 'w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)' : 'w500';
    return `${Constants.BASE_URL_IMAGES}/${contextPath}${imagePath}`;
}

function getContentList(contentType, results, maxSize) {
    if (!results || !results.length) {
        return [];
    }

    maxSize = maxSize || results.length;

    results.sort((result1, result2) => result1.popularity > result2.popularity ? 1 : -1);

    return results
        .map(result => getMediaInfo(contentType, result))
        .filter(media => (
                    media.name
                    && (media.imageUrl.backdrop || media.imageUrl.poster)
                    && (media.rating.count && media.rating.count > 500)
                )
            )
        .slice(0, maxSize);
}

function getMediaInfo(contentType, result) {
    return {
        id: result.id,
        type: contentType,
        name: result.title || result.original_title || result.name || result.original_name,
        imageUrl: {
            backdrop: getFullImageUrl(result.backdrop_path),
            poster: getFullImageUrl(result.poster_path)
        },
        genres: result.genres ? result.genres.map(genre => genre.name) : [],
        releaseDate: result.release_date,
        runtime: result.runtime,
        synopsis: {
            tagline: result.tagline,
            overview: result.overview
        },
        rating: {
            score: result.vote_average,
            count: result.vote_count
        }
    }
}