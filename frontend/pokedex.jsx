import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import { HashRouter, Route} from 'react-router-dom';

import { receiveAllPokemon, requestAllPokemon, requestPokemon, receivePokemon } from './actions/pokemon_actions';
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

  window.requestPokemon = requestPokemon;
  Window.receivePokemon = receivePokemon;
  window.fetchPokemon = Util.fetchPokemon;





});
