import { FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
    const { pokemon, loadPokemons, isNext } = props;

    const loadMore = () => {
        loadPokemons();
    }
  return (
   <FlatList
    data={pokemon}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor={(pokemons) => String(pokemons.id)}
    renderItem={({ item }) => <PokemonCard pokemon={ item }/>}
    contentContainerStyle={styles.flatListContentContainer}
    onEndReached={isNext && loadMore}
    onEndReachedThreshold={0.1}
    ListFooterComponent={
        isNext && (
            <ActivityIndicator
                size='large' style={styles.spinner} color='#AEAEAE'
            />
        )
    }
   />
  )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 30 : 0,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 90 : 60,
    }
});

