import { useState } from 'react'
import pokemons from './assets/pokemons'
import PokemonCard from './components/pokemonCard'
import './App.css'

const bulbasaur = pokemons[0]

console.log("🚀 ~ bulbasaur:", bulbasaur)

function App() {
  const [count, setCount] = useState(0)
  // const nom = 'Zakaria'
  return (
    <div>
        <PokemonCard 
        name={bulbasaur.name.french} 
        types={bulbasaur.type} 
        image={bulbasaur.image}
        attack={bulbasaur.base.Attack}
        defense={bulbasaur.base.Defense}
        hp={bulbasaur.base.HP}
        />
    </div>
  )
}

export default App
