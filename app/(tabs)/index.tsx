// app/(tabs)/index.tsx
import { View, Text, StyleSheet } from 'react-native';
import { typography } from '../../src/constants/theme';
import { getFontFamily } from '../../src/utils/fonts';
import { useTheme } from '../../src/hooks/useTheme';
import RecentTransactions from '../../src/components/RecentTransactions';
import AvailableBalance from '../../src/components/AvailableBalance';

export default function Dashboard() {
  const { colors } = useTheme();
  const styles = getStyles(colors);

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

const getStyles = (colors: any) => StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 50,
      paddingBottom: 100,
      backgroundColor: colors.background,
    },
    header: {
      paddingHorizontal: 20,
    },
    title: {
      fontSize: typography.body,
      color: colors.textMutedForeground,
      fontFamily: getFontFamily(400),
    },
    subtitle: {
      fontSize: typography.heading,
      fontWeight: '700',
      fontFamily: getFontFamily(700),
      color: colors.text,
    },
});