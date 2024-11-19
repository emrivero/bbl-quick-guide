import { CustomTheme } from "@/themes/dark";
import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import teams from "./teams-data";

const Teams = () => {
  const navigation = useNavigation();
  const theme = useTheme() as CustomTheme;

  const handlePress = (team) => {
    navigation.navigate("team", { team });
  };

  return (
    <ScrollView contentContainerStyle={styles.gallery}>
      {teams
        .filter((team) => !team.hidden)
        .map((team) => (
          <TouchableOpacity
            key={team.name}
            style={styles.card}
            onPress={() => handlePress(team)}
          >
            <Image source={team.image} style={styles.image} />
            <Text style={[styles.text, { color: theme.colors.textMenu }]}>
              {team.name}
            </Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 16,
  },
  card: {
    width: "40%",
    marginBottom: 16,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  text: {
    marginTop: 8,
    textAlign: "center",
  },
});

export default Teams;
