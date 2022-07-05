import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FavoriteNavigation from './FavoriteNavigate';
import PokedexNavigate from './PokedexNavigate';
import AccountNavigate from './AccountNavigate';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
          name="FavoriteScreen" 
          component={FavoriteNavigation}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size}/>
          }}
        />
        <Tab.Screen 
          name="PokedexScreen" 
          component={PokedexNavigate}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => renderPokeball()
          }}
        />
        <Tab.Screen 
          name="AccountScreen" 
          component={AccountNavigate}
          options={{
            tabBarLabel: 'Mi cuenta',
            tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size}/>
          }}
        />
    </Tab.Navigator>
  )
}

function renderPokeball() {
  return <Image source={require('../assets/pokeball.png')} style={{ width:55, height:55, top: -15 }}/>
}