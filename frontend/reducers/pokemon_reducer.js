import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      const newState = action.pokemon;
      return Object.assign ({}, newState, state);
    case RECEIVE_SINGLE_POKEMON:

    const pokemon = action.pokeData.pokemon;
    const test = merge({}, state, { [pokemon.id]: pokemon } );
    return test;
    default:
      return state;
  }


};




export default pokemonReducer;
