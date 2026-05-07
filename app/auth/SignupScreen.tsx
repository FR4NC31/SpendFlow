import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { getFontFamily } from '@/utils/fonts';
import { useTheme } from '@/hooks/useTheme';
import { typography } from '@/constants/theme';
import { useRouter } from 'expo-router';
import {FontAwesome5, Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import { registerUser } from '@/services/auth.service';

export default function SignupScreen() {
    const { colors } = useTheme()
    const styles = getStyles(colors)
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async () => {
      try {
        const res = await registerUser({
          name,
          email,
          password
        })
        console.log("SIGNUP SUCCESSFULLY", res)
        router.push('/(tabs)')
      } catch (error: any) {
        console.log("Signup Error:", error)
        const msg = error.response?.data?.message || error.message || "Something went wrong"
        Alert.alert("Signup Failed", msg)
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
          <Text style={styles.title}>Create Flow</Text>
          <Text style={styles.description}>Enter your details to get started.</Text>
        </View>
      </View>
      <View style={styles.SignupContent}>
        <View>
          <Text style={styles.InputTitle}>FULL NAME</Text>
          <FontAwesome5 name="user-circle" size={24} style={styles.userIcon} color={colors.textMutedForeground} />
          <TextInput style={styles.InputText} placeholder='John Doe' placeholderTextColor={colors.textMutedForeground} value={name} onChangeText={setName}/>
          <Text style={styles.InputTitle}>EMAIL</Text>
          <MaterialCommunityIcons name="email-outline" size={24} style={styles.emailIcon} color={colors.textMutedForeground} />
          <TextInput style={styles.InputText}  placeholder='johndoe123@gmailcom'placeholderTextColor={colors.textMutedForeground} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none"/>
          <Text style={styles.InputTitle}>PASSWORD</Text>
          <Feather name="lock" size={24} style={styles.lockIcon} color={colors.textMutedForeground} />
          <TextInput style={styles.InputText} placeholder='********' placeholderTextColor={colors.textMutedForeground} secureTextEntry={!showPassword} value={password} onChangeText={setPassword}/>
          <Pressable style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons 
              name={showPassword ? "eye-outline" : "eye-off"} 
              size={24} 
              color={colors.textMutedForeground} 
            />
          </Pressable>
          </View>
        <TouchableOpacity onPress={handleSignup} style={styles.Signupbtn}>
          <Text style={styles.SignupbtnText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
        <Text style={styles.TermsText}>By continuing, you agree to our <Text style={{color: colors.primary}}>Terms of Service</Text>.
        </Text>
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
    userIcon: {
      position: 'absolute',
      top: 80,
      left: 40,
      zIndex: 1
    },
    lockIcon: {
      position: 'absolute',
      top: 328,
      left: 40,
      zIndex: 1
    },
    eyeIcon: {
      position: 'absolute',
      top: 328,
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
      top: 205,
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
    }
})