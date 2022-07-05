import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';

const Stack = createStackNavigator();
export default function AccountNavigate() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="AccountScreen" 
          component={AccountScreen}
          options={{
            title: 'Cuenta de Usuario',
          }}
        />
    </Stack.Navigator>
  )
}