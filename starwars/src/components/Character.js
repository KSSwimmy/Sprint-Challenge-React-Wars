import React from 'react';
import './StarWars.css';

const Character = props => {
  return (
    <div className='character-container'>
      <h1>Name:</h1>
      <p> {props.Character.name}</p>
      <h1>Gender:</h1>
      <p> {props.Character.gender}</p>
      <h1>Hair Color:</h1>
      <p> {props.Character.hair_color}</p>
     
    </div>

  );
};

export default Character;

