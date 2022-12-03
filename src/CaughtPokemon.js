import React, { useState } from "react";

function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  function catchPokemon() {
    setCaught((currentCaught) => currentCaught.concat(pokemonNameInput));
    setPokemonNameInput("");
  }

  return (
    <p>
      Caught {caught.length} Pokemon on {props.date}
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((pokemon) => {
          return <li>{pokemon}</li>;
        })}
      </ul>
    </p>
  );
}

export default CaughtPokemon;