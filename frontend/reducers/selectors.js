



export const selectAllPokemon = (state) => {
return Object.values(state.entities.pokemon);
};


export const selectAllItems = (items) => {
return Object.values(items)
};
