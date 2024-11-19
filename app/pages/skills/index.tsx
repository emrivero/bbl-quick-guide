import { CustomTheme } from "@/themes/dark";
import { useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import skillsData from "./skills.json"; // Asegúrate de que la ruta sea correcta

const SkillsScreen: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filteredSkills, setFilteredSkills] = useState(skillsData);
  const theme = useTheme() as CustomTheme;

  useEffect(() => {
    setFilteredSkills(
      skillsData.filter((skill) =>
        skill.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const renderSkill = ({ item }) => (
    <View style={styles.skillContainer}>
      <Text
        style={[styles.skillName, { color: theme.colors.skillsHeaderText }]}
      >
        {item.name}
      </Text>
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
      <TextInput
        style={[
          styles.searchBar,
          {
            color: theme.colors.text,
            backgroundColor: theme.colors.card,
          },
        ]}
        placeholder="Buscar habilidades..."
        placeholderTextColor={theme.colors.text}
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredSkills}
        renderItem={renderSkill}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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

export default SkillsScreen;