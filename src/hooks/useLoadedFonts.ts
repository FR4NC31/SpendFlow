import { useFonts } from 'expo-font';

export function useLoadedFonts() {
  const [fontsLoaded, error] = useFonts({
    'PlusJakartaSans-Regular': require('../../assets/fonts/primary/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaSans-Medium': require('../../assets/fonts/primary/PlusJakartaSans-Medium.ttf'),
    'PlusJakartaSans-SemiBold': require('../../assets/fonts/primary/PlusJakartaSans-SemiBold.ttf'),
    'PlusJakartaSans-Bold': require('../../assets/fonts/primary/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Light': require('../../assets/fonts/primary/PlusJakartaSans-Light.ttf'),
    'PlusJakartaSans-ExtraBold': require('../../assets/fonts/primary/PlusJakartaSans-ExtraBold.ttf'),
    'JetBrainsMono-Regular': require('../../assets/fonts/monospace/JetBrainsMono-Regular.ttf'),
    'JetBrainsMono-Medium': require('../../assets/fonts/monospace/JetBrainsMono-Medium.ttf'),
    'JetBrainsMono-SemiBold': require('../../assets/fonts/monospace/JetBrainsMono-SemiBold.ttf'),
    'JetBrainsMono-Bold': require('../../assets/fonts/monospace/JetBrainsMono-Bold.ttf'),
    'JetBrainsMono-Light': require('../../assets/fonts/monospace/JetBrainsMono-Light.ttf'),
    'JetBrainsMono-ExtraBold': require('../../assets/fonts/monospace/JetBrainsMono-ExtraBold.ttf'),
  });

  return { fontsLoaded, error };
}