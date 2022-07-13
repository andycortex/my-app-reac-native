import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITE_STORAGE } from '../utils/constants'
import { includes, pull } from 'lodash';

export async function getPokemonFavoriteApi () {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        console.log(response)
        return JSON.parse(response || '[]');
    }catch (err) {
        throw err;
    }
}

export async function addPokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonFavoriteApi();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        throw error;
    }
}

export async function isPokemonFavoriteApi(id) {
    try {
        const response = await getPokemonFavoriteApi();
        return includes(response, id);
    }catch (err) {
        throw err;
    }
}