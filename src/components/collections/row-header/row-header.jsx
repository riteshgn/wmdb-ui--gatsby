import React from 'react';
import PropTypes from 'prop-types';
import { CollectionsRowHeaderFilters } from '../row-header-filters';
import { Container, RowHeader } from './row-header.styles';

const propTypes = {
    name: PropTypes.string.isRequired,
    filters: PropTypes.objectOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        isActive: PropTypes.bool
    })),
    handleFilterClick: PropTypes.func.isRequired
}

export default function CollectionsRowHeader({ name, filters, handleFilterClick }) {

    return (
        <Container>
            <RowHeader>{name}</RowHeader>
            <CollectionsRowHeaderFilters
                filters={filters}
                handleFilterClick={handleFilterClick}
            />
        </Container>
    )

};

CollectionsRowHeader.propTypes = propTypes;