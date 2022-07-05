import { FlatList, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function PokemonList(props) {
    const { pokemon } = props
  return (
   <FlatList
    data={pokemon}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor={(pokemons) => String(pokemons.id)}
    renderItem={({ item }) => <Text>{item.name}</Text>}
    contentContainerStyle={styles.flatListContentContainer}
   />
  )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    }
})

