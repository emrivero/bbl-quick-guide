import { CustomTheme } from "@/themes/dark";
import { useRoute, useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import skills from "./skills.json";

const SkillScreen: React.FC = () => {
  const theme = useTheme() as CustomTheme;
  const route = useRoute();
  const { params } = route;

  useEffect(() => {
    return () => {
      console.log("SkillScreen unmounted");
    };
  });

  if (!params) {
    return null;
  }
  const { name } = route.params as {
    name: string;
  };

  const description = skills.find((skill) => skill.name === name)?.description;

  const renderSkill = ({
    item,
  }: {
    item: { name: string; description: string[] };
  }) => (
    <View style={styles.skillContainer}>
      <Stack.Screen
        options={{
          title: name,
          headerTintColor: theme.colors.skillsHeaderText,
        }}
      />

      {item.description.map((description, index) => (
        <Text
          key={index}
          style={[styles.skillDescription, { color: theme.colors.text }]}
        >
          {description}
        </Text>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderSkill({ item: { name, description } })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#005310",
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  skillContainer: {
    marginBottom: 20,
  },
  skillName: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  skillDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
});

export default SkillScreen;
