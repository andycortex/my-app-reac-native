import { View, Dimensions, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react';
import { capitalize } from 'lodash';
import { useNavigation } from '@react-navigation/native';
import getColorByPokemonType from '../utils/getColorByPokemonType';



var { height } = Dimensions.get('window'); 
    var box_count = 5;
    var box_height = height / box_count;
    
export default function PokemonCard(props) {
    const { pokemon } = props;
    const navigation = useNavigation();
    const pokemonColor = getColorByPokemonType(pokemon.type);
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles }
    const goToPokemon = () => {
        navigation.navigate('PokemonScreen', { id: pokemon.id });
    }
  return (
    <View>
      <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={styles.card}>
            <View style={styles.spacing}>
                <View style={bgStyles}>
                    <Text style={styles.number}>
                        #{`${pokemon.order}`.padStart(3, 0)}
                    </Text>
                    <Text style={styles.name}>
                        {capitalize(pokemon.name)}
                    </Text>
                    <Image source={{ uri: pokemon.image}} style={styles.image}/>
                </View>
            </View>
        </View >
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        height: box_height,
        flex: 1,
        paddingLeft: 5,
        
    },
    spacing: {
        paddingTop: Platform.OS === "android" ? 25 : 0,
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
        width: 185,
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    image: {
        position: 'absolute',
        top: 25,
        right: 2,
        width: 90,
        height: 90,
      },
})