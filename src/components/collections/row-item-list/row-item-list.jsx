import React from 'react';
import PropTypes from 'prop-types';
import { CollectionsRowItem } from '../row-item';
import { ListContainer } from './row-item-list.styles';
import { useContentByCategory } from './row-item-list.hooks';

const propTypes = {
    categoryId: PropTypes.string.isRequired,
    filterId: PropTypes.string
};

export default function CollectionsRowItemList({ categoryId, filterId }) {

    const contentList = useContentByCategory(categoryId, filterId);

    // TODO: display some default content if content list is empty!

    return (
        <ListContainer>
            {contentList.map(data => (
                <div key={data.id}>
                    <CollectionsRowItem {...data} />
                </div>
            ))}
        </ListContainer>
    );

};

CollectionsRowItemList.propTypes = propTypes;