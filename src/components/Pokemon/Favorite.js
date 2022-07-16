import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react'
import { 
  addPokemonFavoriteApi, 
  isPokemonFavoriteApi,
  removePokemonFavoriteApi 
} from '../../api/favorite';

export default function Favorite(props) {
    const { id } = props;
    const [isFavorite, setIsFavorite] = useState(undefined);
    const [reloadCheck, setReloadCheck] = useState(false);
    useEffect(() => {
      (async() =>{
        try {
          const response = await isPokemonFavoriteApi(id);
          setIsFavorite(response);
        } catch (error) {
          setIsFavorite(false);
        }
      })()
    }, [id, reloadCheck])

    const onReloadCheckFavorites = () => {
      setReloadCheck((prev) => !prev);
    }
    const addFavorite = async () => {
      try {
          await addPokemonFavoriteApi(id);
          onReloadCheckFavorites();
        }catch(e) {
          console.log(error);
        }
    }
    const removeFavorite = async() => {
      try {
        await removePokemonFavoriteApi(id);
        onReloadCheckFavorites();
      } catch (error) {
        
      }
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