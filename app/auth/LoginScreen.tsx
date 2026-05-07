import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Pressable, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { getFontFamily } from '@/utils/fonts';
import { useTheme } from '@/hooks/useTheme';
import { typography } from '@/constants/theme';
import { useRouter } from 'expo-router';
import {FontAwesome5, Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import { loginUser } from '@/services/auth.service';
import { useAuthStore } from '@/store/auth.store';

export default function SignupScreen() {
    const { colors } = useTheme()
    const styles = getStyles(colors)
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { setUser, setToken } = useAuthStore()

    const handleLogin = async () => {
      console.log("Logging in...")
      setLoading(true)

      try {
        const res = await loginUser({
          email,
          password
        })

        console.log("LOGIN SUCCESSFULLY", res)

        // SAVE TO ZUSTAND
        setUser(res.user)
        setToken(res.accessToken)

        router.replace('/(tabs)')

      } catch (error: any) {
        console.log("Login Error:", error)

        const msg =
          error.response?.data?.message ||
          error.message ||
          "Something went wrong"

        Alert.alert("Login Failed", msg)

      } finally {
        setLoading(false)
        console.log("Login finished")
      }
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <MaterialIcons name="arrow-back-ios" size={24} color={colors.textMutedForeground} />
        <Text style={styles.backBtnText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.HeaderContent}>
        <View style={styles.iconBackground}>
         <Image style={styles.icon} source={require('../../assets/img/SFIcon.png')}/>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.description}>Welcome to you flow.</Text>
        </View>
      </View>
      <View style={styles.SignupContent}>
        <View>
          <Text style={styles.InputTitle}>EMAIL</Text>
          <MaterialCommunityIcons name="email-outline" size={24} style={styles.emailIcon} color={colors.textMutedForeground} />
          <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.InputText} placeholder='johndoe123@gmail.com'placeholderTextColor={colors.textMutedForeground}/>
          <Text style={styles.InputTitle}>PASSWORD</Text>
          <Feather name="lock" size={24} style={styles.lockIcon} color={colors.textMutedForeground} />
          <TextInput value={password} onChangeText={(text) => setPassword(text)} style={styles.InputText} placeholder='********' placeholderTextColor={colors.textMutedForeground} secureTextEntry={!showPassword}/>
          <Pressable style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons 
              name={showPassword ? "eye-outline" : "eye-off"} 
              size={24} 
              color={colors.textMutedForeground} 
            />
          </Pressable>
          </View>
          <Pressable style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>FORGOT PASSWORD?</Text>
          </Pressable>
        <TouchableOpacity onPress={handleLogin} disabled={loading} style={styles.Signupbtn}>
          {loading ? (
            <ActivityIndicator size="small" color={colors.surface} />
          ) : (
            <Text style={styles.SignupbtnText}>Sign In</Text>
          )}
        </TouchableOpacity>
        <Pressable style={styles.createAccount} onPress={() => router.push('/auth/SignupScreen')}>
          <Text style={styles.createAccountText}>Don&apos;t have an account? Create one</Text>
        </Pressable>
      </View>
    </View>
  )
}

const getStyles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
    },
    backBtn: {
        position: 'absolute',
        top: 60,
        left: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backBtnText: {
        fontFamily: getFontFamily(700),
        fontSize: typography.subheading,
        color: colors.textMutedForeground,
        paddingBottom: 5
    },
    icon: {
        width: 100,
        height: 100
    },
    iconBackground: {
        width: 80,
        height: 80,
        backgroundColor: '#242549',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        marginLeft: 20,
    },
    HeaderContent: {
      flexDirection: 'row',
      gap: 10
    },
    headerText: {
      marginTop: 155
    },
    title: {
      fontSize: typography.heading,
      fontFamily: getFontFamily(900),
      color: colors.text,
    },
    description: {
      fontSize: typography.body,
      fontFamily: getFontFamily(500),
      color: colors.textMutedForeground,
      marginTop: 2
    },
    SignupContent: {
      backgroundColor: colors.surface,
      width: '87%',
      height: 540,
      borderRadius: 30,
      marginTop: 50,
      marginLeft: 20,
      alignSelf: 'center',
      marginRight: 20
    },
    InputText: {
      backgroundColor: colors.surface,
      width: '90%',
      height: 60,
      borderRadius: 40,
      marginTop: 10,
      marginLeft: 20,
      borderWidth: 1,
      paddingLeft: 55,
      paddingRight: 35,
      color: colors.textMutedForeground,
      fontFamily: getFontFamily(500),
      fontSize: typography.body
    },
    InputTitle: {
      fontSize: typography.body,
      fontFamily: getFontFamily(900),
      letterSpacing: 3,
      color: colors.textMutedForeground,
      marginTop: 30,
      marginLeft: 20
    },
    lockIcon: {
      position: 'absolute',
      top: 205,
      left: 40,
      zIndex: 1
    },
    eyeIcon: {
      position: 'absolute',
      top: 205,
      left: 320,
      zIndex: 1
    },
    Signupbtn: {
      backgroundColor: colors.primary,
      width: '90%',
      height: 60,
      borderRadius: 40,
      marginTop: 30,
      marginLeft: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    emailIcon: {
      position: 'absolute',
      top: 82,
      left: 40,
      zIndex: 1
    },
    SignupbtnText: {
      fontSize: typography.body,
      fontFamily: getFontFamily(900),
      color: colors.surface,
      marginBottom: 2
    },
    TermsText: {
      fontSize: typography.body,
      fontFamily: getFontFamily(400),
      color: colors.textMutedForeground,
      marginTop: 40,
      marginLeft: 20
    },
    forgotPassword: {
      marginTop: 10,
      alignItems: 'flex-end',
      marginRight: 20
    },
    forgotPasswordText: {
      fontSize: typography.caption,
      fontFamily: getFontFamily(700),
      color: colors.textMutedForeground,
    },
    createAccount: {
      marginTop: 20,
      alignItems: 'center'
    },
    createAccountText: {
      fontSize: typography.body,
      fontFamily: getFontFamily(700),
      color: colors.primary,
    }
})