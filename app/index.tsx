import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { useTheme } from '@/hooks/useTheme'
import { typography } from '@/constants/theme'
import { getFontFamily } from '@/utils/fonts'

export default function GetStarted() {
    const { colors } = useTheme()
    const router = useRouter()
    const styles = getStyles(colors)
  return (
    <View style={styles.container}>
      <View style={styles.iconBackground}>
        <Image style={styles.icon} source={require('../assets/img/SFIcon.png')}/>
      </View>
      <View style={styles.headerContent}>
        <Text style={[styles.header, styles.headerColor1] }>SPEND</Text>
        <Text style={[styles.header, styles.headerColor2]}>FLOW</Text>
      </View>
      <Text style={{color: colors.textMutedForeground, fontFamily: getFontFamily(900), fontSize: typography.body, textAlign: 'center'}}>Precision banking for
        <Text style={{color: colors.text, fontFamily:getFontFamily(700)}}> minimalist </Text> {'\n'}
        economy.
      </Text>
      <TouchableOpacity style={styles.Startedbtn} onPress={() => router.push('/auth/SignupScreen')}>
        <Text style={styles.StartedbtnText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('/auth/LoginScreen')}>
        <Text style={styles.loginBtnText}>Already have an account</Text>
      </TouchableOpacity>
    </View>
  )
}

const getStyles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconBackground: {
        height: 150,
        width: 150,
        backgroundColor: '#242549',
        justifyContent: 'center',
        borderRadius: 30,
        alignItems: 'center',
    },
    icon: {
        width: 220,
        height: 220,
    },
    headerContent: {
        flexDirection: 'row',
        marginTop: 20
    },
    header: {
        fontSize: typography.heading,
        fontFamily: getFontFamily(900),
    },
    headerColor1: {
        color: colors.text
    },
    headerColor2: {
        color: colors.primary
    },
    Startedbtn: {
      marginTop: 200,
      height: 60,
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: colors.primary
    },
    StartedbtnText: {
      fontSize: typography.subheading,
      fontFamily: getFontFamily(700),
      color: colors.surface
    },
    loginBtn: {
      marginTop: 20
    },
loginBtnText: {
      fontSize: typography.body,
      fontFamily: getFontFamily(900),
      color: colors.textMutedForeground
    }
  })