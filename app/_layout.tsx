import { useColorScheme } from "@/hooks/useColorScheme";
import { CustomTheme, DarkCustomTheme } from "@/themes/dark";
import { LightTheme } from "@/themes/default";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { useTheme } from "react-native-paper";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const theme = useTheme() as CustomTheme;
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

  const CurrentTheme = color === "dark" ? DarkCustomTheme : LightTheme;

  return (
    <ThemeProvider value={CurrentTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="pages" />
      </Stack>
    </ThemeProvider>
  );
}
