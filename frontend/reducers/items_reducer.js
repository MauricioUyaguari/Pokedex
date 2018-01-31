import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
    const newState = {};
    const items = action.pokeData.items;
    items.forEach((item) =>{
      newState[item.id] = item;
    });
    return merge({}, state,newState);
    default:
      return state;
  }
};




export default itemsReducer;
