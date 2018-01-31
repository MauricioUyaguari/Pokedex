import React from 'react';
import ItemsDetailContainer from '../items/items_detail_container';
import ItemsIndexItem from '../items/items_index_item';
import { HashRouter, Route } from 'react-router-dom';

class PokemonDetail extends React.Component {

  constructor(props){
    super(props);
  }



  componentWillReceiveProps(newProps){
    if (this.props.pokemonId !== newProps.pokemonId){
      this.props.requestSinglePokemon(newProps.pokemonId);
    }

  }



  componentDidMount(){
    const id = parseInt(this.props.pokemonId);
    this.props.requestSinglePokemon(id);
  }

  render () {
  const pokemon = this.props.pokemon;
    if( !pokemon || !pokemon.moves){
      return null;
    }

    const moves = pokemon.moves.map(move => (
      <li>{move}</li>
    ));


    const renderItems = this.props.items.map(item => {
      if(item.pokemon_id === this.props.pokemon.id){
      return (<ItemsIndexItem key={item.id} item={item}/>);
      }
  });


    return (<div>
      <ul> Name: {pokemon.name}
        <img className="mainImg" src={pokemon.image_url}></img>
        <li> Defense: {pokemon.defense}</li>
        <li> Attack: {pokemon.attack}</li>
        <li> Type: {pokemon.poke_type}</li>
        <li> Moves :
          <ul>
            { moves }
          </ul>
        </li>

        <li> items :
          <ul>
            { renderItems }
          </ul>
        </li>
        <Route path='/pokemon/:pokemonId/items/:itemId' component={ItemsDetailContainer}/>
      </ul>
    </div>)

  }


}

export default PokemonDetail;
