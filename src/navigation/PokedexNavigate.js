import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';


const Stack = createStackNavigator();
export default function PokedexNavigate() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="PokedexNavigate" 
        component={PokedexScreen}
        options={{
          title: '',
          headerTransparent: true,
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