import { FontAwesome5, FontAwesome6, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { HapticTab } from "../../components/HapticTab";

export default function PagesLayout() {
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "white",
          borderColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="teams"
        options={{
          title: "Equipos",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="football-ball" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="skills"
        options={{
          title: "Habilidades",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="hand-back-fist" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="actions"
        options={{
          title: "Acciones",
          tabBarIcon: ({ color }) => (
            <Octicons name="workflow" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
