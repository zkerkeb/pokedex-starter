import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import {useNavigate} from "react-router";

const PokemonCard = ({ name, image, types, hp, attack, defense,id,setPokemons, pokemon }) => {
  const [currentHp, setCurrentHp] = useState(hp);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const navigate = useNavigate();

  const goToPokemon = (id) => {
    navigate(`/pokemon/${id}`);
  }

  const deletePokemon = (id) => {
    console.log('suppression du pokemon');
    console.log(id);
    axios.delete(`http://localhost:3000/api/pokemons/${id}`).then((response) =>{
      console.log('pokemon supprimé',response.data);
      setPokemons(response.data.newPokemonsList)
    }).catch((error) =>{
      console.log('erreur lors de la suppression du pokemon',error);
    })
  }

   const editPokemon = (id) => {
    console.log('modification du pokemon');
    console.log(id);
    const newPokemon = {
      ...pokemon,
      name: {
        ...pokemon.name,
        french: editedName,
      },

    }
    console.log('newPokemon',newPokemon);

    axios.put(`http://localhost:3000/api/pokemons/${id}`, newPokemon).then((response) =>{
      console.log('pokemon modifié',response.data);
      setIsEditing(false);
      // setPokemons(response.data.newPokemonsList)
    }).catch((error) =>{
      alert('Erreur lors de la modification du pokemon');
      console.log('erreur lors de la modification du pokemon',error);
    })


   }

  useEffect(() => {
    // alert('Le combat commence')
  }, []);

  useEffect(() => {
    console.log(currentHp);
    if (currentHp <= 0) {
      alert("Bulbasaur est mort");
    }
  }, [currentHp]);

  return (
    <div className="pokemon-card">
      <div className="pokemon-name-container">
        {isEditing ? <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} /> : <span className="pokemon-name">{editedName}</span>}
      </div>
      <img className="pokemon-image" src={image} alt={name} />

      <div className="pokemon-types-container">
        {types.map((type) => {
          return <span key={type}>{type}</span>;
        })}
      </div>
      <div className="pokemon-stats-container">
        <span>HP: {currentHp}</span>
        <span>Attack: {attack}</span>
        <span>Defense: {defense}</span>
      </div>

      <button
        onClick={() => {
          console.log("vous frapper le pokemon");
          setCurrentHp(currentHp - 10);
        }}
      >
        Attack
      </button>
      <button onClick={() => deletePokemon(id)}>Supprimer</button>
      <button onClick={() => setIsEditing(!isEditing)}> 
        {isEditing ? 'Annuler' : 'Modifier'}
        </button>
        {isEditing ? <button onClick={() => editPokemon(id)}>Enregistrer</button> : null}
        <button onClick={() => goToPokemon(id)}>Voir le pokemon</button>
    </div>
  );
};

export default PokemonCard;
