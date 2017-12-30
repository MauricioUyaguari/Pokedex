import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';



const mapDispatchToProps = dispatch => ( {
requestSinglePokemon: (pokemonId) =>  dispatch(requestSinglePokemon(pokemonId))
})


const mapStateToProps = (state, ownProps) => ({
  state: state,
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
  pokemonId: ownProps.match.params.pokemonId
});






export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
