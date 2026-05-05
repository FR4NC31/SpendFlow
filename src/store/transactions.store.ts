import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

interface TransactionsState {
  transactions: Transaction[]
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void
  removeTransaction: (id: string) => void
  getTotalIncome: () => number
  getTotalExpense: () => number
  getBalance: () => number
}

export const useTransactionsStore = create<TransactionsState>()(
  persist(
    (set, get) => ({
      transactions: [
        {
          id: '1',
          title: 'Grocery Store',
          category: 'Food',
          amount: 85.50,
          type: 'expense',
          date: '2026-05-01',
          icon: 'shopping-cart',
          color: '#F43F5E',
        },
        {
          id: '2',
          title: 'Salary Deposit',
          category: 'Income',
          amount: 3200.00,
          type: 'income',
          date: '2026-05-01',
          icon: 'dollar-sign',
          color: '#10B981',
        },
        {
          id: '3',
          title: 'Netflix Subscription',
          category: 'Entertainment',
          amount: 15.99,
          type: 'expense',
          date: '2026-04-30',
          icon: 'tv',
          color: '#8B5CF6',
        },
        {
          id: '4',
          title: 'Gas Station',
          category: 'Transport',
          amount: 45.00,
          type: 'expense',
          date: '2026-04-30',
          icon: 'truck',
          color: '#3B82F6',
        },
        {
          id: '5',
          title: 'Freelance Payment',
          category: 'Income',
          amount: 850.00,
          type: 'income',
          date: '2026-04-29',
          icon: 'briefcase',
          color: '#10B981',
        },
      ],
      
      addTransaction: (transaction) => {
        const newTransaction: Transaction = {
          ...transaction,
          id: Date.now().toString(),
        }
        set((state) => ({
          transactions: [newTransaction, ...state.transactions],
        }))
      },
      
      removeTransaction: (id) => {
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        }))
      },
      
      getTotalIncome: () => {
        const { transactions } = get()
        return transactions
          .filter((t) => t.type === 'income')
          .reduce((sum, t) => sum + t.amount, 0)
      },
      
      getTotalExpense: () => {
        const { transactions } = get()
        return transactions
          .filter((t) => t.type === 'expense')
          .reduce((sum, t) => sum + t.amount, 0)
      },
      
      getBalance: () => {
        const income = get().getTotalIncome()
        const expense = get().getTotalExpense()
        return income - expense
      },
    }),
    {
      name: 'transactions-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)