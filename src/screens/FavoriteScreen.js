import { SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FavoriteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>FavoriteScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});