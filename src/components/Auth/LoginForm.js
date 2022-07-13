import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user, userDetails } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
    const [error, setError] = useState('');
    const { login } = useAuth();
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formValue) => {
            setError('')
            
            const { username, password } = formValue;
            if (username !== user.username || password !== user.password) {
                setError('el usuario y la contraseña no son correcto')
            }else {
                login(userDetails);
            }
        }

    })
  return (
    <View>
      <Text style={styles.title}>Iniciar Session</Text>
      <TextInput 
        placeholder='Nombre de usuario'
        style={styles.input}
        autoCapitalize='none'
        value={formik.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
        />
        <Text style={styles.error}>{formik.errors.username}</Text>
       <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
        />
        <Text style={styles.error}>{formik.errors.password}</Text>
        <Text style={styles.error}>{error}</Text>
        <Button title='Entrar' onPress={formik.handleSubmit}/>  
    </View>
  )
}

function validationSchema () {
    return {
        username: Yup.string().required('El usuario es obligatorio'),
        password: Yup.string().required('La contraseña es obligatorio').min(3),
    }
}
const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    error: {
        textAlign: 'left',
        color: '#f00',
        marginLeft: 20,
        marginBottom: 10,

    },
})
function initialValues() {
    return {
        username: '',
        password: '',
    }
}