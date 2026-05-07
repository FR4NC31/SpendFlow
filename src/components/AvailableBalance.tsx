import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'
import { useTheme } from '../hooks/useTheme'
import { getFontFamily, getMonoFont } from '../utils/fonts'
import { useTransactionsStore } from '../store/transactions.store'

const formatCurrency = (amount: number) => {
  return `₱${amount.toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

export default function AvailableBalance() {
  const { colors } = useTheme()
  const transactions = useTransactionsStore((state) => state.transactions)
  const [showBalance, setShowBalance] = useState(true)

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)
  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)
  const balance = income - expense

  const gradientColors: [string, string, string] = ['#1E1B4B', '#312E81', '#4C1D95']

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.balanceCard}
      >
        <View style={styles.cardTop}>
          <View style={styles.cardTopLeft}>
            <View style={styles.iconBadge}>
              <Feather name="credit-card" size={18} color="#fff" />
            </View>
            <View>
              <Text style={styles.cardLabel}>Total Balance</Text>
              <Text style={styles.cardSubLabel}>Your available funds</Text>
            </View>
          </View>
          <TouchableOpacity 
            onPress={() => setShowBalance(!showBalance)}
            style={styles.eyeButton}
          >
            <Feather 
              name={showBalance ? 'eye' : 'eye-off'} 
              size={20} 
              color="rgba(255,255,255,0.6)"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.balanceAmount}>
          {showBalance ? formatCurrency(balance) : '••••••••'}
        </Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },

  balanceCard: {
    width: '100%',
    borderRadius: 24,
    padding: 20,
    position: 'relative',
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  cardTopLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardLabel: {
    fontSize: 14,
    fontFamily: getFontFamily(600),
    color: 'rgba(255,255,255,0.9)',
  },

  cardSubLabel: {
    fontSize: 11,
    fontFamily: getFontFamily(400),
    color: 'rgba(255,255,255,0.5)',
    marginTop: 2,
  },

  eyeButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },

  balanceAmount: {
    fontSize: 40,
    fontFamily: getMonoFont(800),
    color: '#fff',
    marginTop: 16,
    letterSpacing: -1,
  },
})