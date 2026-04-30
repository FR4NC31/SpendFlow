// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { lightTheme } from '../../src/constants/theme';

const { colors } = lightTheme;

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      <Tabs screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMutedForeground,
        tabBarStyle: styles.tabBar,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabBar: {
    position: 'absolute',
    width: '90%',
    bottom: 30,
    left: 20,
    right: 20,
    height: 72,
    marginLeft: 20,
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 10,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    paddingHorizontal: 10,
    paddingBottom: Platform.OS === 'ios' ? 0 : 10, 
  },
  tabBarItem: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Medium',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
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