import { StyleSheet, Text, TouchableOpacity, View, Switch, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { getFontFamily } from '../../src/utils/fonts'
import { COLOR_OPTIONS, typography } from '../../src/constants/theme'
import { Feather, Octicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../src/hooks/useTheme'
import { useRouter, Href } from 'expo-router'
import { logout } from '../../src/utils/auth'
import { useAuthStore } from '@/store/auth.store'

export default function Profile() {
  const { colors, mode, toggleTheme } = useTheme()
  const styles = getStyles(colors)
  const { user } = useAuthStore()

  const router = useRouter()

  return (
    <>
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Text style={styles.Header}>Profile</Text>

        {/* Profile Card */}
        <View style={styles.ProfileContentShadow}>
          <View style={styles.ProfileContent}>
            <View style={styles.ProfileIconShadow}>
              <LinearGradient
                colors={[colors.secondary, colors.primary, '#c663ff']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1.1, y: 0 }}
                style={styles.ProfileIcon}
              >
                <Feather name="user" size={34} color="white" />
              </LinearGradient>
            </View>
            <View style={styles.ProfileText}>
              <Text style={styles.ProfileName}>{user?.name || 'User'}</Text>
              <Text style={styles.ProfileEmail}>{user?.email || 'No email'}</Text>
            </View>
          </View>
        </View>

        {/* Account Section */}
        <Text style={styles.AccountHeader}>ACCOUNT</Text>
        <View style={styles.AccountContentShadow}>
          <TouchableOpacity style={styles.AccountContent}>
            <View style={[styles.gearIconBox, { backgroundColor: `${colors.primary}30` }]}>
              <Octicons name="gear" size={24} color={colors.secondary} />
            </View>
            <View style={styles.AccountText}>
              <Text style={styles.AccountTextHeader}>Account Settings</Text>
              <Text style={styles.AccountTextSubHeading}>Manage your account</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={30} color={colors.textMutedForeground} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <Text style={styles.PreferenceHeader}>PREFERENCES</Text>
        <View style={styles.PreferenceContentShadow}>

          {/* Email Notifications */}
          <TouchableOpacity style={styles.PreferenceRow}>
            <View style={[styles.mailIconBox, { backgroundColor: `${colors.secondary}30` }]}>
              <Octicons name="mail" size={24} color={COLOR_OPTIONS.blue} />
            </View>
            <View style={styles.RowText}>
              <Text style={styles.RowTextHeader}>Email Notifications</Text>
              <Text style={styles.RowTextSubHeading}>Manage email preferences</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={30} color={colors.textMutedForeground} style={styles.arrowIcon} />
          </TouchableOpacity>

          {/* Push Notifications */}
          <TouchableOpacity style={[styles.PreferenceRow, styles.rowBorderTop]}>
            <View style={[styles.bellIconBox, { backgroundColor: `${colors.income}30` }]}>
              <Feather name="bell" size={24} color={COLOR_OPTIONS.emerald} />
            </View>
            <View style={styles.RowText}>
              <Text style={styles.RowTextHeader}>Push Notifications</Text>
              <Text style={styles.RowTextSubHeading}>Manage push notifications</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={30} color={colors.textMutedForeground} style={styles.arrowIcon} />
          </TouchableOpacity>

          {/* Theme Mode */}
          <View style={[styles.PreferenceRow, styles.rowBorderTop]}>
            <View style={[styles.moonIconBox, { backgroundColor: `${colors.secondary}30` }]}>
              {mode === 'dark' ? (
                <Octicons name="moon" size={24} color={colors.primary} />
              ) : (
                <Feather name="sun" size={24} color={colors.warning} />
              )}
            </View>
            <View style={styles.RowText}>
              <Text style={styles.RowTextHeader}>Theme</Text>
              <Text style={styles.RowTextSubHeading}>{mode === 'dark' ? 'Dark Mode' : 'Light Mode'}</Text>
            </View>
            <Switch
              value={mode === 'dark'}
              onValueChange={toggleTheme}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.surface}
            />
          </View>
        </View>

        {/* Account Section */}
        <Text style={styles.DataHeader}>DATA</Text>
        <View style={styles.DataContentShadow}>
          <TouchableOpacity style={styles.DataContent}>
            <View style={[styles.trashIconBox, { backgroundColor: `${colors.expense}30` }]}>
              <Feather name="trash-2" size={24} color={colors.expense} />
            </View>
            <View style={styles.DataText}>
              <Text style={styles.DataTextHeader}>Reset All Data</Text>
              <Text style={styles.DataTextSubHeading}>Delete all transactions</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={30} color={colors.textMutedForeground} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={async () => {
          console.log('[Profile] Logout button pressed');
          await logout();
          console.log('[Profile] Navigating to LoginScreen...');
          router.replace('/auth/LoginScreen');
        }} style={[styles.LogoutBtn, {backgroundColor: `${colors.expense}20`}]}>
          <MaterialIcons name="logout" size={24} color={colors.expense} />
          <Text style={styles.LogoutBtnText}>Logout</Text>
        </TouchableOpacity>
<Text style={styles.footer}>SpendFlow v1.0.0</Text>
      </ScrollView>
    </>
  )
}

const getStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingTop: 40,
    paddingBottom: 130,
  },
  Header: {
    paddingHorizontal: 30,
    fontFamily: getFontFamily(900),
    fontSize: typography.superheading,
    color: colors.text,
  },

  // ── Profile ──────────────────────────────────────────────
  ProfileContentShadow: {
    backgroundColor: colors.surface,
    borderRadius: 30,
    width: '85%',
    height: 120,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    alignSelf: 'center',
    marginTop: 30,
  },
  ProfileContent: {
    width: '100%',
    height: 120,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
  },
  ProfileIcon: {
    width: 70,
    height: 70,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileIconShadow: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  ProfileText: {
    flex: 1,
    marginBottom: 10,
  },
  ProfileName: {
    fontFamily: getFontFamily(900),
    fontSize: typography.heading,
    color: colors.text,
  },
  ProfileEmail: {
    fontFamily: getFontFamily(700),
    fontSize: typography.caption,
    color: colors.textMutedForeground,
  },

  // ── Account ──────────────────────────────────────────────
  AccountHeader: {
    paddingHorizontal: 30,
    paddingBottom: 10,
    fontSize: typography.caption,
    marginTop: 30,
    fontFamily: getFontFamily(900),
    color: colors.textMutedForeground,
  },
  AccountContentShadow: {
    backgroundColor: colors.surface,
    borderRadius: 30,
    width: '90%',
    height: 130,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  AccountContent: {
    width: '100%',
    height: 80,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 30,
  },
  gearIconBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },
  AccountText: {
    flex: 1,
    gap: 2,
  },
  AccountTextHeader: {
    fontFamily: getFontFamily(900),
    fontSize: 18,
    color: colors.text,
  },
  AccountTextSubHeading: {
    fontFamily: getFontFamily(700),
    fontSize: typography.caption,
    color: colors.textMutedForeground,
  },
  arrowIcon: {
    marginLeft: 'auto' as any,
  },


  PreferenceHeader: {
    paddingHorizontal: 30,
    paddingBottom: 10,
    fontSize: typography.caption,
    marginTop: 30,
    fontFamily: getFontFamily(900),
    color: colors.textMutedForeground,
  },
  PreferenceContentShadow: {
    backgroundColor: colors.surface,
    borderRadius: 30,
    width: '90%',
    height: 350,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  PreferenceRow: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  rowBorderTop: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  RowText: {
    flex: 1,
    gap: 2,
  },
  RowTextHeader: {
    fontFamily: getFontFamily(900),
    fontSize: 18,
    color: colors.text,
  },
  RowTextSubHeading: {
    fontFamily: getFontFamily(700),
    fontSize: typography.caption,
    color: colors.textMutedForeground,
  },
  mailIconBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },
  bellIconBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },
  moonIconBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },
  DataHeader: {
    paddingHorizontal: 30,
    paddingBottom: 10,
    fontSize: typography.caption,
    marginTop: 0,
    fontFamily: getFontFamily(900),
    color: colors.textMutedForeground,
  },
  DataContentShadow: {
    backgroundColor: colors.surface,
    borderRadius: 30,
    width: '90%',
    height: 130,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  DataContent: {
    width: '100%',
    height: 80,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 30,
  },
  trashIconBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  },
  DataText: {
    flex: 1,
    gap: 2,
  },
  DataTextHeader: {
    fontFamily: getFontFamily(900),
    fontSize: 18,
    color: colors.text,
  },
  DataTextSubHeading: {
    fontFamily: getFontFamily(700),
    fontSize: typography.caption,
    color: colors.textMutedForeground,
  },
  LogoutBtn: {
    borderRadius: 15,
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingRight: 40
  },
  LogoutBtnText: {
    color: colors.expense,
    fontSize: typography.subheading,
    fontFamily: getFontFamily(700),
    marginBottom: 5
  },
  footer: {
    fontSize: typography.body,
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: getFontFamily(600),
    color: colors.textMutedForeground,
  }
})