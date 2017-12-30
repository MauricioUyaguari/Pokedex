import React from 'react';
import { Link } from 'react-router-dom';


const ItemsIndexItem = (props) => {

    const {id, name, happiness, image_url , price, pokemon_id} = props.item

    return (
      <div>
      <Link to={`/pokemon/${pokemon_id}/items/${id}`}>
      <li>
        <span> {id}</span>
        <span> {name}</span>
        <img className="mainImg"src={image_url}></img>
      </li>
    </Link>
      </div>
    );


};


export default ItemsIndexItem;
