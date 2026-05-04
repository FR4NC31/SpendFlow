import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Lists() {
  return (
    <View style={styles.container}>
      <Text>Lists</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
  },
})