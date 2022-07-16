import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../screens/FavoriteScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();

export default function FavoriteNavigate() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="FavoriteScreen" 
          component={FavoriteScreen}
          options={{
            title: 'Favoritos'
          }}
        />
        <Stack.Screen 
          name="PokemonScreen" 
          component={PokemonScreen}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
    </Stack.Navigator>
  )
}