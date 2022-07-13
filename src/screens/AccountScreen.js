import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from '../components/Auth/LoginForm';
import useAuth from '../hooks/useAuth';
import UserDetails from '../components/Auth/UserDetails';

export default function AccountScreen() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <View style={styles.container}>
      {auth ? <UserDetails/> : <LoginForm/>}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});