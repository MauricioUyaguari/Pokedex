import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonIndexContainer from './pokemon_detail_container';
import { HashRouter, Route} from 'react-router-dom';

class PokemonIndex extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }



  render () {
    const { pokemon } = this.props;
    const pokes = pokemon.map(poke => (
      <PokemonIndexItem pokemon={poke} key={poke.id}/>
      )
    );

    return (
    <div className="main-div">
      <section className="pokemon-list">
        <ul className="ulpoke">All Pokemon Go here
          { pokes }
        </ul>
      </section>
      <section className="pokemon-chosen">
        <Route path='/pokemon/:pokemonId' component={PokemonIndexContainer}> </Route>
      </section>
    </div>
  );
  }


}


export default PokemonIndex;
