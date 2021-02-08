import React from 'react';
import { Link } from 'gatsby';
import { useSearch } from './media-finder.hooks';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItemsContainer,
    DropdownItem
} from './media-finder.styles';

const MediaFinder = () => {
    const { searchString, searchResults, setSearchString } = useSearch();

    return (
        <Dropdown>
            <DropdownTrigger
                type="text"
                placeholder="Search for a Movie or TV Show..."
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
            />
            {Boolean(searchResults.length) &&
                <DropdownMenu role="menu">
                    <DropdownItemsContainer>
                    {
                        searchResults.map((result, index) => (
                            <DropdownItem key={index}>
                                <Link to={`media/${result.type}/${result.id}`}>
                                    {result.name}
                                </Link>
                            </DropdownItem>
                        ))
                    }
                    </DropdownItemsContainer>
                </DropdownMenu>
            }
        </Dropdown>
    );
}

export default MediaFinder;