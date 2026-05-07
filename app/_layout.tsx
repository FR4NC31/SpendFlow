import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '../src/hooks/useTheme'
import { useLoadedFonts } from '../src/hooks/useLoadedFonts'

export default function RootLayout() {
  const { fontsLoaded } = useLoadedFonts()
  if (!fontsLoaded) return null

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}