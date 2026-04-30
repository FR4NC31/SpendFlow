import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { lightTheme } from '../constants/theme'

export default function RecentTransactions() {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.headerTitle}>Recent Transactions</Text>
        <TouchableOpacity >
          <Text style={styles.headerButtonText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.EmptyStateContent}>
        <Text style={styles.EmptyStateText}>No recent transactions</Text>
        <TouchableOpacity>
          <Text style={styles.EmptyStateButtonText}>Add Transaction</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 450,
    marginLeft: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 15,
    fontFamily: 'PlusJakartaSans-Bold',
    marginBottom: 10,
  },
  headerButtonText: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Bold',
    color: lightTheme.colors.secondary,
  },
  EmptyStateContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  EmptyStateText: {
    fontSize: 13,
    fontFamily: 'PlusJakartaSans-Bold',
    marginBottom: 10,
    color: lightTheme.colors.textMutedForeground
  },
  EmptyStateButtonText: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Bold',
    color: lightTheme.colors.secondary,
  },
})