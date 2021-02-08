import { useState } from 'react';

function _toInitialFilterState(filters, activeFilterId) {
    // changes the filters from an array to a dictionary format
    // this makes it easy to lookup the filters by id
    // and manipulate the state as required

    const state = filters.reduce((acc, filter) => {
        acc[filter.id] = {
            ...filter,
            isActive: (filter.id === activeFilterId)
        }

        return acc;
    }, {});

    return state;
}

function _cloneAndSetNewActive(oldState, toBeActivated) {
    // find the currently active filter
    const currentlyActive = Object.keys(oldState).find(filterId => oldState[filterId].isActive);

    // modify only the affected filters
    // so set initial value to the old state
    const newState = oldState;

    // clone the currently active filter and reset its active status
    newState[currentlyActive] = {
        ...oldState[currentlyActive],
        isActive: false
    }

    // clone the to-be-activated filter and set its active status
    newState[toBeActivated] = {
        ...oldState[toBeActivated],
        isActive: true
    }

    return newState;
}

export function useCategoryFilters(filters) {
    const [activeFilterId, setActiveFilterId] = useState(filters.length ? filters[0].id : "__nofilter__");
    const [state, setState] = useState(_toInitialFilterState(filters, activeFilterId));

    function __activateFilter(filter) {
        setState(oldState => {
            return _cloneAndSetNewActive(oldState, filter.id)
        });
        setActiveFilterId(filter.id);
    }

    return {
        filters: state,
        activeFilterId,
        activateFilter: __activateFilter
    };
}