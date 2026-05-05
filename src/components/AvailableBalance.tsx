import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'
import { getFontFamily, getMonoFont } from '../utils/fonts'
import { useTheme } from '../hooks/useTheme'
import { useTransactionsStore } from '../store/transactions.store'

const formatCurrency = (amount: number) => {
  return `₱${amount.toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

export default function AvailableBalance() {
  const { colors, mode } = useTheme()
  const transactions = useTransactionsStore((state) => state.transactions)
  const [showBalance, setShowBalance] = useState(true)

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)
  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)
  const balance = income - expense

  const spentPercent = income > 0 ? Math.min((expense / income) * 100, 100) : 0
  const remaining = Math.max(0, income - expense)

  const gradientColors: [string, string, string] = mode === 'dark'
    ? ['#1E1B4B', '#312E81', '#4C1D95']
    : ['#4F46E5', '#6366F1', '#818CF8']

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

      <View style={[styles.statsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={styles.statsHeader}>
          <View style={styles.statsTitleRow}>
            <View style={[styles.statsIconBox, { backgroundColor: `${colors.primary}15` }]}>
              <Feather name="pie-chart" size={16} color={colors.primary} />
            </View>
            <Text style={[styles.statsTitle, { color: colors.text }]}>Monthly Overview</Text>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statsItem}>
            <Text style={[styles.statsItemLabel, { color: colors.textMutedForeground }]}>Income</Text>
            <Text style={[styles.statsItemValue, { color: colors.income }]}>{formatCurrency(income)}</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={[styles.statsItemLabel, { color: colors.textMutedForeground }]}>Spent</Text>
            <Text style={[styles.statsItemValue, { color: spentPercent > 80 ? colors.expense : colors.text }]}>{formatCurrency(expense)}</Text>
          </View>
        </View>

        <View style={styles.savingsSection}>
          <View style={styles.savingsRow}>
            <View style={styles.savingsLeft}>
              <Feather name="dollar-sign" size={16} color={colors.income} />
              <Text style={[styles.savingsLabel, { color: colors.textMutedForeground }]}>Savings</Text>
            </View>
            <Text style={[styles.savingsValue, { color: colors.income }]}>{formatCurrency(remaining)}</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
              <View
                style={[
                  styles.progressFill,
                  { 
                    width: `${100 - spentPercent}%`, 
                    backgroundColor: colors.income,
                  },
                ]}
              />
            </View>
          </View>
        </View>
      </View>
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

  statsCard: {
    width: '100%',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 16,
  },

  statsHeader: {
    marginBottom: 20,
  },

  statsTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  statsIconBox: {
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  statsTitle: {
    fontSize: 15,
    fontFamily: getFontFamily(600),
  },

  statsGrid: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  statsItem: {
    flex: 1,
    alignItems: 'center',
  },

  statsItemLabel: {
    fontSize: 11,
    fontFamily: getFontFamily(500),
    marginBottom: 6,
  },

  statsItemValue: {
    fontSize: 17,
    fontFamily: getMonoFont(700),
  },

  progressContainer: {
    marginTop: 4,
  },

  progressBar: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 4,
  },

  progressFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  progressText: {
    fontSize: 12,
    fontFamily: getFontFamily(500),
  },

  savingsSection: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
  },

  savingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  savingsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  savingsLabel: {
    fontSize: 13,
    fontFamily: getFontFamily(500),
  },

  savingsValue: {
    fontSize: 18,
    fontFamily: getMonoFont(700),
  },

  warningBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  warningText: {
    fontSize: 11,
    fontFamily: getFontFamily(600),
  },
})