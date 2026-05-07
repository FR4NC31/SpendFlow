import AsyncStorage from "@react-native-async-storage/async-storage";

export const logout = async (onComplete?: () => void | Promise<void>) => {
    console.log('[Auth] Starting logout...');
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    console.log('[Auth] Finished reset auth token');
    if (onComplete) {
        await onComplete();
    }
    console.log('[Auth] Logout successful');
}

export const isAuthenticated = async (): Promise<boolean> => {
    const token = await AsyncStorage.getItem("token");
    return !!token;
}