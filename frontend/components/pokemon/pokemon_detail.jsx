import React from 'react';






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
      </ul>
    </div>)

  }


}

export default PokemonDetail;
