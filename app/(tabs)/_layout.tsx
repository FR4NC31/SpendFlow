// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text, StyleSheet } from 'react-native';
import { getFontFamily } from '../../src/utils/fonts';
import { useTheme } from '../../src/hooks/useTheme';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const styles = getStyles(colors);
  
  return (
    <View style={styles.container}>
      <Tabs screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMutedForeground,
        tabBarStyle: {
          ...styles.tabBar,
          paddingBottom: insets.bottom || 16,
        },
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarShowLabel: true,
      }}>
        <Tabs.Screen name="index" options={{ 
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={22} color={color} />
          ),
        }} />
        <Tabs.Screen name="lists" options={{ 
          title: 'Lists',
          tabBarIcon: ({ color }) => (
           <MaterialCommunityIcons name="list-box-outline" size={22} color={color} />
          )
        }} />
        <Tabs.Screen name="add" options={{ 
          title: '', // Remove label for center button
          tabBarIcon: ({ color }) => (
            <View style={styles.addIconContainer}>
               <Text style={styles.addIconText}>+</Text>
            </View>
          )
        }} />
        <Tabs.Screen name="stats" options={{ 
          title: 'Stats',
          tabBarIcon: ({ color }) => (
            <AntDesign name="bar-chart" size={22} color={color} />
          )
        }} />
        <Tabs.Screen name="profile" options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={22} color={color} />
          )
        }} />
      </Tabs>
    </View>
  );
}

const getStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabBar: {
    position: 'absolute',
    width: '90%',
    height: 72,
    backgroundColor: colors.surface,
    borderRadius: 24,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    paddingTop: 12,
    paddingHorizontal: 10,
    bottom: 25,
    marginLeft: 20,
  },
  tabBarItem: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: getFontFamily(600),
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  addIconContainer: {
    backgroundColor: colors.primary,
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    top: 5, 
  },
  addIconText: {
    fontSize: 28,
    fontWeight: '300',
    color: '#FFFFFF',
    marginTop: -2,
  }
});