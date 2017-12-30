import React from 'react';
import { Link } from 'react-router-dom';


const PokemonIndexItem = (props) => {
  const {id, name, image_url} = props.pokemon;
  return (
    <div>
    <Link to={`/pokemon/${id}`}>
    <li>
      <span> {id}</span>
      <span> {name}</span>
      <img src={image_url}></img>
    </li>
  </Link>
    </div>
  );

};




export default  PokemonIndexItem;
