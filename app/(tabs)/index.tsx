// app/(tabs)/index.tsx

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { typography } from '@/constants/theme';
import { getFontFamily } from '@/utils/fonts';
import { useTheme } from '@/hooks/useTheme';
import RecentTransactions from '@/components/RecentTransactions';
import AvailableBalance from '@/components/AvailableBalance';
import { useAuthStore } from '@/store/auth.store';

export default function Dashboard() {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  // READ USER ONLY
  const { user } = useAuthStore();

  console.log(user);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back,</Text>

        <Text style={styles.subtitle}>
          {user?.name} 👋
        </Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <AvailableBalance />
        <RecentTransactions />
      </ScrollView>
    </View>
  );
}

const getStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 70,
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
