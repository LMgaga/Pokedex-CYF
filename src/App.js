import React from "react"
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonCity from "./PokemonCity";
import PokemonMovesSelector from "./PokemonMovesSelector";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {
   function logWhenClicked() {
    console.log("Hello");
  }
  return (
    <BrowserRouter>
     <ul>
      <li>
        <Link to="/Logo">Logo Page</Link>
        </li>
        <li><Link to="/BestPokemon">Pokemon Page</Link>
        </li>
        <li><Link to="CaughtPokemon">CaughtPokemon Page</Link>
        </li>
        <li><Link to="PokemonMovesSelector">PokemonMovesSelector </Link>
        </li>
     </ul>
   <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
      <PokemonCity />
      <Routes>
        <Route path="/BestPokemon" element={<BestPokemon />} />
        <Route path="/CaughtPokemon" element={<CaughtPokemon/>} />
      </Routes>
     
   </div>
    </BrowserRouter>
    
    );

}

export default App;
