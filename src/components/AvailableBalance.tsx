import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { lightTheme } from '../constants/theme';

const { colors } = lightTheme;

export default function AvailableBalance() {
  return (
    <View style={styles.container}>
     <View style={styles.content}>
        <Text style={styles.balanceText}>AVAILABLE BALANCE</Text>
        <Text style={styles.AmountText}>₱1,000.00</Text>
      <View style={styles.currentBalance}>
        <View style={styles.IncomeContent}>
            <View style={styles.IncomeArrow}>
                <Feather name="arrow-up-right" size={24} color={'#16be86'} />
            </View>
            <View style={styles.IncomeText}>
                <Text style={styles.incomeTitle}>INCOME</Text>
                <Text style={styles.incomeAmount}>₱1,000.00</Text>
            </View>
        </View>
        <View style={styles.ExpenseContent}>
            <View style={styles.ExpenseArrow}>
                <Feather name="arrow-down-right" size={24} color={'#F43F5E'} />
            </View>
            <View style={styles.ExpenseText}>
                <Text style={styles.expenseTitle}>EXPENSES</Text>
                <Text style={styles.expenseAmount}>₱500.00</Text>
            </View>
        </View>
      </View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    content: {
        width: '90%',
        height: 190,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 20,
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    balanceText: {
        marginTop: 20,
        paddingHorizontal: 30,
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'PlusJakartaSans-Bold',
        color: colors.text
    },
    AmountText: {
        paddingHorizontal: 30,
        fontSize: 32,
        fontWeight: '900',
        fontFamily: 'PlusJakartaSans-ExtraBold',
        color: colors.text,
        fontStyle: 'italic'
    },
    currentBalance: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30
    },
    IncomeContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        height: 60,
        borderWidth: 1,
        borderRadius: 15,
        gap: 12,
        borderColor: "rgb(187, 187, 187, 0.3)",
    },
    IncomeArrow: {
        height: 30,
        width: 30,
        backgroundColor: 'rgb(16, 185, 129, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    ExpenseContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        height: 60,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "rgb(187, 187, 187, 0.3)",
        gap: 12
    },
    ExpenseArrow: {
        height: 30,
        width: 30,
        backgroundColor: 'rgb(244, 63, 94, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    IncomeText: {
        gap: 2,
    },
    incomeTitle: {
        fontSize: 11,
        fontWeight: '500',
        fontFamily: 'PlusJakartaSans-Medium',
        color: colors.textMutedForeground,
    },
    incomeAmount: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'PlusJakartaSans-Bold',
        color: colors.income,
    },
    ExpenseText: {
        gap: 2,
    },
    expenseTitle: {
        fontSize: 11,
        fontWeight: '500',
        fontFamily: 'PlusJakartaSans-Medium',
        color: colors.textMutedForeground,
    },
    expenseAmount: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'PlusJakartaSans-Bold',
        color: colors.expense,
    },
})