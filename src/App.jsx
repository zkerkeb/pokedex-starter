import { useState } from 'react'
import pokemons from './assets/pokemons'
import PokemonCard from './components/pokemonCard'
import './App.css'


function App() {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id} className="pokemon-card-container">
          <PokemonCard 
          name={pokemon.name.french} 
          types={pokemon.type} 
          image={pokemon.imageShiny}
          attack={pokemon.base.Attack}
          defense={pokemon.base.Defense}
          hp={pokemon.base.HP}
        />
        </div>
        )
      })}
    </div>
  )
}

export default App
