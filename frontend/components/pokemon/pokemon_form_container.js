import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { createSinglePokemon } from '../../';


const mapDispatchToProps = dispatch => ( {
  createSinglePokemon: (pokemon) => dispatch(createSinglePokemon(pokemon))
});





export default connect(null, mapDispatchToProps)(PokemonForm);
