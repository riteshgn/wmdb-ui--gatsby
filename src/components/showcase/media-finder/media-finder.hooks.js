import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

import SearchEngine from './media-finder.search-engine';

// Will delay function invocation until this time has elapsed
const DEBOUNCE_WAIT_TIME_IN_MS = 225;
// Max time function is allowed to be delayed
// If a new invocation does not occur by this time then
// the function will be invole with previous arguments
const DEBOUNCE_MAX_WAIT_TIME_IN_MS = 500;
/**
 * The search bar triggers multiple search requests to the backend and not all
 * of them are necessary. The entry when user pauses typing is the most crucial.
 *
 * So the debounce API is used here to rate limit the number of times a request
 * is sent to the search engine.
 *
 * @see https://lodash.com/docs/4.17.15#debounce
 */
const DEBOUNCED_SEARCH_FN = debounce(
    (value, setResults) => SearchEngine.search(value, setResults),
    DEBOUNCE_WAIT_TIME_IN_MS,
    { maxWait: DEBOUNCE_MAX_WAIT_TIME_IN_MS }
);

export function useSearch() {
    const [searchString, setSearchString] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        DEBOUNCED_SEARCH_FN(searchString, setSearchResults);
    }, [searchString]);

    return {
        searchString,
        searchResults,
        setSearchString
    }
}