import "./App.css";
import PokemonCard from "./components/pokemonCard";
import pokemons from "./assets/pokemons";
console.log("🚀 ~ pokemons:", pokemons);

const bulbasaur = pokemons[0];
console.log("🚀 ~ bulbasaur:", bulbasaur);

function App() {
  return (
    <div className="pokemon-list-container">
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id} className="pokemon-card-container">
            <PokemonCard
              name={pokemon.name.french}
              image={pokemon.image}
              types={pokemon.type}
              hp={pokemon.base.HP}
              attack={pokemon.base.Attack}
              defense={pokemon.base.Defense}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
