import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react'
import { addPokemonFavoriteApi, isPokemonFavoriteApi } from '../../api/favorite';

export default function Favorite(props) {
    const { id } = props;
    const [isFavorite, setIsFavorite] = useState(undefined);
    useEffect(() => {
      (async() =>{
        try {
          const response = await isPokemonFavoriteApi(id);
          setIsFavorite(response);
        } catch (error) {
          setIsFavorite(false);
        }
      })()
    }, [id])
    

    const addFavorite = async () => {
        await addPokemonFavoriteApi(id);
    }
    const removeFavorite = () => {
      console.log('eliminar de favoritos');
    }
  return (
    <Icon 
        name={ isFavorite ? "trash" : "heart"} 
        color='#fff' 
        size={20}
        onPress={isFavorite ? removeFavorite : addFavorite} 
        style={{ marginRight: 20 }}/>
  )
}