import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkCustomTheme } from "@/themes/dark";
import { LightTheme } from "@/themes/default";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const color = useColorScheme();
  const [loaded] = useFonts({
    Sporting: require("../assets/fonts/Sporting.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={color === "dark" ? DarkCustomTheme : LightTheme}>
      <Stack
        screenOptions={{
          headerShown: false, // Oculta el header en todas las pantallas
        }}
      >
        <Stack.Screen name="actions" options={{ headerShown: false }} />
        <Stack.Screen name="skills" options={{ headerShown: false }} />
        <Stack.Screen name="teams" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
