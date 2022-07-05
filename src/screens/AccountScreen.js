import { SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AccountScreen</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});