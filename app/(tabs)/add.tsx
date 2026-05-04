import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Add() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 100,
    },
  })

  return (
    <View style={styles.container}>
      <Text>Add Transaction</Text>
    </View>
  )
}