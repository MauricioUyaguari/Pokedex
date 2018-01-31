export const fetchAllPokemon =  () => {
  return $.ajax({
    url:'/api/pokemon',
    type: 'GET'
  });
};


export const fetchPokemon = (id) => {

  return $.ajax({
    url: `/api/pokemon/${id}`,
    type: 'GET'
  });

};



export const createPokemon = (pokemon) => {

  return $.ajax({
    url:'/api/pokemon',
    type: 'POST',
    data: { pokemon }

  });
};
