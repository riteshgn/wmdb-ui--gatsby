import { SearchEngine } from '../../../lib/search-engine';

import { TmdbApi } from '../../../api/tmdb';

export default new SearchEngine({

    queryRemote: (value) => (
        Promise.all([
            TmdbApi.search('movie', value),
            TmdbApi.search('tv', value)
        ]).then((results) => results.reduce(
            (acc, result) => [...acc, ...result],
            []
        ))
    ),

    compare: (result1, result2) => {
        if (result1.name > result2.name) {
            return 1;
        }

        if (result1.name < result2.name) {
            return -1;
        }

        return (result1.id > result2.id ? 1 : -1)
    }

});