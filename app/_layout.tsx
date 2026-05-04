import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useLoadedFonts } from '../src/hooks/useLoadedFonts'
import { ThemeProvider } from '../src/hooks/useTheme'

export default function RootLayout() {
    useLoadedFonts()

    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <Stack screenOptions={{ headerShown: false }}/>
            </ThemeProvider>
        </SafeAreaProvider>
    )
}