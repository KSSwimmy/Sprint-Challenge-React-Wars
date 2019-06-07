import React from 'react';
import Character from './Character';

//mapping over data, sending it to Character.js via props

const StarWarsCharacters = props => {
  return props.StarWarsCharacters.map(character => (
    <Character Character={character} />
  ));
};

export default StarWarsCharacters;
