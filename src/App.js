import React from "react"
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonCity from "./PokemonCity";
import PokemonMovesSelector from "./PokemonMovesSelector";


function App() {
   function logWhenClicked() {
    console.log("Hello");
  }
  return (
   <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
      <PokemonCity />
   </div>
  
    );

}

export default App;
