import { IconSymbol } from "@/components/ui/IconSymbol";
import BlurTabBarBackground from "@/components/ui/TabBarBackground.ios";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { HapticTab } from "../../components/HapticTab";

export default function PagesLayout() {
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: BlurTabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {
            backgroundColor: "red",
            opacity: 1,
            backgroundOpacity: 1,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
