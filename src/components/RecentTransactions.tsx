import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import { COLOR_OPTIONS } from '../constants/theme'
import { getFontFamily, getMonoFont } from '../utils/fonts'
import { useTheme } from '../hooks/useTheme'

export interface Transaction {
  id: string
  title: string
  category: string
  amount: number
  type: 'income' | 'expense'
  date: string
  icon: string
  color: string
}

const transactions: Transaction[] = [
  {
    id: '1',
    title: 'Grocery Store',
    category: 'Food',
    amount: 85.50,
    type: 'expense',
    date: '2026-05-01',
    icon: 'shopping-cart',
    color: COLOR_OPTIONS.rose,
  },
  {
    id: '2',
    title: 'Salary Deposit',
    category: 'Income',
    amount: 3200.00,
    type: 'income',
    date: '2026-05-01',
    icon: 'dollar-sign',
    color: COLOR_OPTIONS.emerald,
  },
  {
    id: '3',
    title: 'Netflix Subscription',
    category: 'Entertainment',
    amount: 15.99,
    type: 'expense',
    date: '2026-04-30',
    icon: 'tv',
    color: COLOR_OPTIONS.violet,
  },
  {
    id: '4',
    title: 'Gas Station',
    category: 'Transport',
    amount: 45.00,
    type: 'expense',
    date: '2026-04-30',
    icon: 'truck',
    color: COLOR_OPTIONS.blue,
  },
  {
    id: '5',
    title: 'Freelance Payment',
    category: 'Income',
    amount: 850.00,
    type: 'income',
    date: '2026-04-29',
    icon: 'briefcase',
    color: COLOR_OPTIONS.emerald,
  },
]

const formatCurrency = (amount: number) => {
  return `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  if (date.toDateString() === today.toDateString()) return 'Today'
  if (date.toDateString() === yesterday.toDateString()) return 'Yesterday'
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

const TransactionItem = ({ item, colors }: { item: Transaction; colors: any }) => (
  <TouchableOpacity activeOpacity={0.7} style={[styles.transactionItem, { borderBottomColor: colors.divider }]}>
    <View style={[styles.iconContainer, { backgroundColor: `${item.color}15` }]}>
      <Feather name={item.icon as any} size={18} color={item.color} />
    </View>
    <View style={styles.transactionInfo}>
      <Text style={[styles.transactionTitle, { color: colors.text }]} numberOfLines={1}>{item.title}</Text>
      <Text style={[styles.transactionCategory, { color: colors.textMutedForeground }]} numberOfLines={1}>{item.category}</Text>
    </View>
    <View style={styles.transactionRight}>
      <Text style={[styles.transactionAmount, { color: item.type === 'income' ? colors.income : colors.expense }]} numberOfLines={1}>
        {item.type === 'income' ? '+' : '-'}{formatCurrency(item.amount)}
      </Text>
      <Text style={[styles.transactionDate, { color: colors.textMutedForeground }]} numberOfLines={1}>{formatDate(item.date)}</Text>
    </View>
  </TouchableOpacity>
)

export default function RecentTransactions() {
  const { colors } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Recent Transactions</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={[styles.headerButtonText, { color: colors.secondary }]}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {transactions.map((item) => (
          <TransactionItem key={item.id} item={item} colors={colors} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    minHeight: 400,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 15,
    fontFamily: getFontFamily(700),
  },
  headerButtonText: {
    fontSize: 12,
    fontFamily: getFontFamily(700),
  },
  listContainer: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionInfo: {
    flex: 1,
    flexShrink: 1,
  },
  transactionTitle: {
    fontSize: 13,
    fontFamily: getFontFamily(600),
    marginBottom: 2,
  },
  transactionCategory: {
    fontSize: 11,
    fontFamily: getFontFamily(400),
  },
  transactionRight: {
    alignItems: 'flex-end',
    flexShrink: 0,
  },
  transactionAmount: {
    fontSize: 13,
    fontFamily: getMonoFont(700),
    marginBottom: 2,
  },
  transactionDate: {
    fontSize: 10,
    fontFamily: getFontFamily(400),
  },
})