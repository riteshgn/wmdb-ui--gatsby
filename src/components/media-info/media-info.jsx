import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
    Container,
    InfoArticle ,
    InfoColumn,
    MediaImage,
    SectionWithSeparator,
    Title,
    SubTitle,
    Content,
    JustifiedContent
} from './media-info.styles';
import { useMediaInfo } from './media-info.hooks';

const NoInfo = () => (
    <InfoArticle>
        <InfoColumn>
            <Content>No information found</Content>
        </InfoColumn>
    </InfoArticle>
);

const AllInfo = ({ mediaInfo }) => (
    <InfoArticle>
        {/* Media Image */}
        <MediaImage
            src={mediaInfo.imageUrl.poster || mediaInfo.imageUrl.backdrop}
            alt={mediaInfo.name}
        />
        {/* Details of selected media */}
        <InfoColumn>
            <SectionWithSeparator>
                <Title>{mediaInfo.name}</Title>
                {Boolean(mediaInfo.synopsis)
                    && <SubTitle>
                        {mediaInfo.synopsis.tagline}
                    </SubTitle>}
                {Boolean(mediaInfo.rating)
                    && <Content>
                        User rating: { mediaInfo.rating.score}
                        {` (${mediaInfo.rating.count})`}
                    </Content>}
            </SectionWithSeparator>

            <SectionWithSeparator>
                {Boolean(mediaInfo.genres)
                    && <Content>
                        {mediaInfo.genres.join(', ')}
                    </Content>}
                {Boolean(mediaInfo.releaseDate)
                    && <Content>
                        Release Date: {mediaInfo.releaseDate}
                    </Content>}
                {Boolean(mediaInfo.runtime)
                    && <Content>
                        Runtime: {mediaInfo.runtime} mins
                    </Content>}
            </SectionWithSeparator>
            <section>
                <SubTitle>Synopsis</SubTitle>
                {Boolean(mediaInfo.synopsis)
                    && <JustifiedContent>
                        {mediaInfo.synopsis.overview}
                    </JustifiedContent>}
            </section>
        </InfoColumn>
    </InfoArticle>
);

const MediaInfo = ({ mediaType, id }) => {
    const mediaInfo = useMediaInfo(mediaType, id);
    const Info = (mediaInfo && mediaInfo.name)
        ? AllInfo
        : NoInfo

    return (
        <Container>
            <Info mediaInfo={mediaInfo} />
            <Link to="/">Back to Home</Link>
        </Container>
    );
};

MediaInfo.propTypes = {
    mediaType: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default MediaInfo;