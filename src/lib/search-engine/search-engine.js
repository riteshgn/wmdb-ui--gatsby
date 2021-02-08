import Bloodhound from 'bloodhound-js';

import { identifyResult, compareResults } from './search-engine.utils';

const MIN_REQUIRED_IN_LOCAL = 5;

/**
 * Implements a search engine
 *
 * Currently implemented using bloodhound engine (from twitter typeahead)
 * https://github.com/twitter/typeahead.js/blob/master/doc/bloodhound.md
 *
 * @param {Object} configuration - Settings for the search engine
 *                 @param {Array}    initialEntries -  The initial list of entries added to the engine
 *                                                     @default []
 *                 @param {Function} queryRemote    -  A function which will be invoked to load entries
 *                                                     from a remote source incase search results are
 *                                                     less than minimum required number. @see MIN_REQUIRED_IN_LOCAL
 *                                                     function signature: (search_term) => Array(search_results)
 *                                                     @default null
 *                 @param {Function} identify       -  A function which will return a unique identifier
 *                                                     for each entry. By default it assumes that each
 *                                                     entry has an `id` field
 *                                                     function signature: @see search-engine.utils::identifyResult
 *                                                     @default null
 *                 @param {Function} compare        -  A function to compare two search result entries for
 *                                                     sorting. By default it compares the `id` field
 *                                                     function signature: @see search-engine.utils::compareResults
 *                                                     @default null
 *
 */
function SearchEngine({initialEntries = [], queryRemote = null, identify = null, compare = null}) {

    const self = this;

    self._initialEntries = initialEntries;
    self._queryRemote = queryRemote;
    self._identify = identify || identifyResult;
    self._compare = compare || compareResults;

    self._engine = null;
    self._initialized = false;

    return {
        /**
         * Attempts to initialize the search engine
         * @returns true if successful otherwise false
         */
        initialize: async () => await _initialize(self),

        /**
         * Performs a search based on provided value
         * Returns the results via the setResults callback function
         *
         * The callback function has signature `fn(results)`
         *
         * It will internally check if the engine has been initialized
         * and if not then try and do the initialization
         *
         * An error will be thrown if initialization fails
         */
        search: (value, setResults) => _search(self, value, setResults)
    }

}

export default SearchEngine;

////////////////////////////////////////////////////////////////////

async function _checkAndDoInitialization(that, requestor) {
    if (!that._initialized && !await _initialize(that)) {
        throw new Error(`[${requestor}] Could not initialize search engine`)
    }

    return true;
}

async function _initialize(that) {
    if (that._initialized) {
        return true;
    }

    try {

        that._engine = new Bloodhound({
            // Setting this to false so that we can track initialization success/failure
            initialize: false,
            local: that._initialEntries,
            identify: that._identify,
            sorter: that._compare,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        });

        await that._engine.initialize();
        that._initialized = true

    } catch (error) {
        console.error(`Error initializing search engine: ${error}`);
    }

    return that._initialized;
}

async function _search(that, value, setResults) {
    if (!value) {
        setResults([]);
    }

    await _checkAndDoInitialization(that, '_search');

    that._engine.search(value, (results) => _queryRemoteIfRequired(that, value, results, setResults));
}

async function _queryRemoteIfRequired(that, value, currentResults, setResults) {
    if (!value) {
        // Empty string queried so no results possible!
        return setResults([]);
    }

    if (currentResults.length > MIN_REQUIRED_IN_LOCAL
        || that._queryRemote === null) {
        // Sufficient results have been found in local so return local results
        return setResults(currentResults);
    }

    // Either no results were found in local
    // OR local does not have sufficient results
    // So querying remote database

    // TODO: throttle backend calls
    const results = await that._queryRemote(value);

    that._engine.add(results);
    setResults(results);
}