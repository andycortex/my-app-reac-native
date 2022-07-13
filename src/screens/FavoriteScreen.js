import { SafeAreaView, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { getPokemonFavoriteApi } from '../api/favorite'

export default function FavoriteScreen() {
  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Favoritos</Text>
      <Button title='Obtener Favoritos' onPress={checkFavorites}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});