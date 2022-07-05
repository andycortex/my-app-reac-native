import React, {useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function PokedexScreen() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  },[]);
  
  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi();
      const pokemonArray = [];
      for await (const pokemons of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemons.url);
        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen: pokemonDetails.sprites.other['official-artwork'].front_default,
        })
      }
      setPokemon([...pokemon,...pokemonArray]);
    }catch (err) {
      console.error(err)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <PokemonList pokemon={pokemon}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
  }
});