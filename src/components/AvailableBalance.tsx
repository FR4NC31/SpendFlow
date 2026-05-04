import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import { getFontFamily, getMonoFont } from '../utils/fonts'
import { useTheme } from '../hooks/useTheme'

const formatCurrency = (amount: number) => {
  return `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

const income = 4500.00
const expense = 1250.00
const balance = income - expense

export default function AvailableBalance() {
  const { colors } = useTheme()

  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.label, { color: colors.textMutedForeground }]}>Available Balance</Text>
        <Text style={[styles.amount, { color: colors.text }]}>{formatCurrency(balance)}</Text>
        
        <View style={styles.progressBar}>
          <View style={[styles.incomeBar, { backgroundColor: colors.income, flex: 1 }]} />
          <View style={[styles.expenseBar, { backgroundColor: colors.expense, flex: (expense / income) * 1 }]} />
        </View>
        
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={[styles.statIconBox, { backgroundColor: `${colors.income}15` }]}>
              <Feather name="arrow-up-right" size={16} color={colors.income} />
            </View>
            <View>
              <Text style={[styles.statTitle, { color: colors.textMutedForeground }]}>Income</Text>
              <Text style={[styles.statAmount, { color: colors.income }]}>{formatCurrency(income)}</Text>
            </View>
          </View>
          
          <View style={styles.statCard}>
            <View style={[styles.statIconBox, { backgroundColor: `${colors.expense}15` }]}>
              <Feather name="arrow-down-right" size={16} color={colors.expense} />
            </View>
            <View>
              <Text style={[styles.statTitle, { color: colors.textMutedForeground }]}>Expense</Text>
              <Text style={[styles.statAmount, { color: colors.expense }]}>{formatCurrency(expense)}</Text>
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
  },
  card: {
    width: '90%',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
  },
  label: {
    fontSize: 13,
    fontFamily: getFontFamily(500),
    marginBottom: 4,
  },
  amount: {
    fontSize: 36,
    fontFamily: getMonoFont(900),
    marginBottom: 20,
  },
  progressBar: {
    height: 8,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 20,
  },
  incomeBar: {
  },
  expenseBar: {
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIconBox: {
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  statTitle: {
    fontSize: 11,
    fontFamily: getFontFamily(500),
    marginBottom: 2,
  },
  statAmount: {
    fontSize: 15,
    fontFamily: getMonoFont(700),
  },
})