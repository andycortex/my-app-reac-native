import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../screens/FavoriteScreen';

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
    </Stack.Navigator>
  )
}