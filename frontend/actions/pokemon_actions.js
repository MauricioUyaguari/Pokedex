import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});


export const receiveSinglePokemon = (pokeData) => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokeData
});



export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (pokemonId) => (dispatch) => (
  APIUtil.fetchPokemon(pokemonId)
    .then( (singlePokemon) => dispatch(receiveSinglePokemon(singlePokemon)))
);


export const createSinglePokemon = (pokemon) => (dispatch) => (
APIUtil.createPokemon(pokemon)
.then((poke) => dispatch(receiveSinglePokemon(poke)))
);
