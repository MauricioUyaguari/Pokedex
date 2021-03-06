import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import { HashRouter, Route} from 'react-router-dom';

import { receiveAllPokemon, requestAllPokemon, requestPokemon, receivePokemon, createSinglePokemon }
from './actions/pokemon_actions';
import configureStore from './store/store';
import * as Util  from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store = {store}/>, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.fetchAllPokemon = Util.fetchAllPokemon;
  window.createPokemon = Util.createPokemon;
  window.requestPokemon = requestPokemon;
  Window.receivePokemon = receivePokemon;
  window.fetchPokemon = Util.fetchPokemon;
  window.createSinglePokemon = createSinglePokemon;
  const poke = {name: "mauricio12", attack: 4,
    defense: 5, poke_type: "water",
    moves: ["one", "two"], image_url: "1.svg"
  };

  window.poke = poke;

});
