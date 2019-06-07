import React from 'react';
import Character from './Character'

const StarWarsCharacters = props => {
    return props.StarWarsCharacters.map(Character => (
        <Character Character=(character) />
    ));
};

export default StarWarsCharacters;