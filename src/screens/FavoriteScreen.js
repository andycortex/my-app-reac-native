import { SafeAreaView,Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { getPokemonFavoriteApi } from '../api/favorite'
import useAuth from '../hooks/useAuth';
import { getPokemonDetailsApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';
import NoLogged from '../components/NoLogged';

export default function FavoriteScreen() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoriteApi();
          const pokemonArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);
            pokemonArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other['official-artwork'].front_default,
            })
          }
          setPokemons(pokemonArray)
        })()
      }
    }, [auth])
  )

  return !auth ? (
    <SafeAreaView style={styles.container}>
      <NoLogged/>
      
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <PokemonList pokemon={pokemons}/>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});