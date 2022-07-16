import { View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function NoLogged() {
    const navigation = useNavigation();
  return (
    <View style={styles.content}>
        <Text style={styles.text}>Para ver tus Pokemons Favoritos debes iniciar sesion</Text>
        <Button 
            title='Ir a Iniciar Sesion' 
            onPress={() => navigation.navigate('AccountScreen')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    text: {
        textAlign: 'center',
        marginBottom: 10,
    }
})