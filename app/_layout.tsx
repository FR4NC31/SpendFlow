import { Stack } from 'expo-router'
import { useLoadedFonts } from '../src/hooks/useLoadedFonts'

export default function RootLayout() {
    useLoadedFonts()

    return <Stack screenOptions={{ headerShown: false }}/>
}