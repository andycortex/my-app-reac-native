import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';


const Stack = createStackNavigator();
export default function PokedexNavigate() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="PokedexScreen" 
        component={PokedexScreen}
        options={{
          title: 'Lista de Pokemones'
        }}
      />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen}/>
      
        
    </Stack.Navigator>
  )
}