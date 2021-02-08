import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { MediaCard, CardImage, CardContent } from './row-item.styles';

const propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.shape({
        backdrop: PropTypes.string,
        poster: PropTypes.string
    })
};

export default function CollectionsRowItem({ id, type, name, imageUrl }) {

    return (
        <MediaCard>
            <Link to={`/media/${type}/${id}`}>
                <CardImage
                    src={imageUrl.backdrop || imageUrl.poster}
                    alt={`for ${name}`}
                />

                <CardContent>
                    <p>{name}</p>
                </CardContent>
            </Link>
        </MediaCard>
    );

};

CollectionsRowItem.propTypes = propTypes;