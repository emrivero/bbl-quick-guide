// app/teams.tsx
import { CustomTheme } from "@/themes/dark";
import { useRoute, useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Table from "./table";

const SelectedTeamsScreen: React.FC = () => {
  const theme = useTheme() as CustomTheme;
  const route = useRoute();
  const { team } = route.params as { team: { data: any[] } };
  if (!team.data) return null;
  return (
    <View style={styles.container}>
      <Table data={team.data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SelectedTeamsScreen;
