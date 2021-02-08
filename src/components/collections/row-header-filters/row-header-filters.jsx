import React from 'react';
import PropTypes from 'prop-types';
import { Filters, FilterActive, FilterInactive } from './row-header-filters.styles';

const propTypes = {
    filters: PropTypes.objectOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        isActive: PropTypes.bool
    })),
    handleFilterClick: PropTypes.func.isRequired
};

export default function CollectionsRowHeaderFilters({ filters, handleFilterClick }) {

    return (
        <Filters>
            {Object.keys(filters).map(filterId => {
                const Filter = filters[filterId].isActive
                    ? FilterActive
                    : FilterInactive;

                return (
                    <Filter
                        key={filterId}
                        onClick={() => handleFilterClick(filters[filterId])}
                    >
                        {filters[filterId].name}
                    </Filter>
                );
            })}
        </Filters>
    );

};

CollectionsRowHeaderFilters.propTypes = propTypes;