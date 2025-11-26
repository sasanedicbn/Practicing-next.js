import React from "react";

const QueryPokemonList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default QueryPokemonList;
