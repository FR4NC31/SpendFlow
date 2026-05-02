// app/(tabs)/index.tsx
import { View, Text, StyleSheet } from 'react-native';
import { lightTheme } from '../../src/constants/theme';
import RecentTransactions from '../../src/components/RecentTransactions';

import AvailableBalance from '../../src/components/AvailableBalance';

const { colors, typography } = lightTheme;

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back,</Text>
        <Text style={styles.subtitle}>John Doe 👋</Text>
      </View>
      <AvailableBalance />
      <RecentTransactions />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 50,
    },
    header: {
      paddingHorizontal: 20,
    },
    title: {
      fontSize: typography.body,
      color: colors.textMutedForeground,
      fontFamily: 'PlusJakartaSans-Regular',
    },
    subtitle: {
      fontSize: typography.heading,
      fontWeight: '700',
      fontFamily: 'PlusJakartaSans-Bold',
      color: colors.text,
    },
});