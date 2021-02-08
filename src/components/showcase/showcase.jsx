import React from 'react';
import { MediaFinder } from './media-finder';
import {
    Hero,
    BackgroundImage,
    Body,
    Heading
} from './showcase.styles';

const Showcase = () => {

    return (
        <Hero>
            <BackgroundImage
                src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,c5c6c7)/uOJHKQgazwVw9YJl7jW1TB1SL47.jpg"
                alt="star wars: rouge one"
            />
            <Body>
                <Heading>The Wow Movie Database</Heading>
                <MediaFinder />
            </Body>
        </Hero>
    );

};

export default Showcase;