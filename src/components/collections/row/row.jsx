import React from 'react';
import PropTypes from 'prop-types';
import { CollectionsRowHeader } from '../row-header';
import { CollectionsRowItemList } from '../row-item-list';
import { RowContainer } from './row.styles';
import { useCategoryFilters } from './row.hooks';

const propTypes = {
    category: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        filters: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }))
    })
};

export default function CollectionsRow({ category }) {
    const { filters, activeFilterId, activateFilter } = useCategoryFilters(category.filters);

    return (
        <RowContainer>
            <CollectionsRowHeader
                name={category.name}
                filters={filters}
                handleFilterClick={activateFilter}
            />
            <CollectionsRowItemList
                categoryId={category.id}
                filterId={activeFilterId}
            />
        </RowContainer>
    );
};

CollectionsRow.propTypes = propTypes;