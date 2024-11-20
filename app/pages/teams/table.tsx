import { CustomTheme } from "@/themes/dark";
import { useTheme } from "@react-navigation/native";
import React, { FC, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-paper";
import skills from "../skills/skills.json";

const TableToCards: FC<{ data: any }> = ({ data }) => {
  const theme = useTheme() as CustomTheme;

  const headers = data.map((item) => item.header);
  const positions = data[0].values.map((_, index) => {
    const positionData = {};
    headers.forEach((header, headerIndex) => {
      positionData[header] = data[headerIndex].values[index];
    });
    return positionData;
  });

  const skillsNames = skills.map((skill) => skill.name);
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState([""]);

  const showDescription = (name: string) => {
    setDescription(
      skills.find((skill) => skill.name === name)?.description || [""]
    );
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              { backgroundColor: theme.colors.background },
            ]}
          >
            {description.map((description, index) => (
              <Text
                key={index}
                style={[
                  styles.skillDescription,
                  { color: theme.colors.skillsHeaderText },
                ]}
              >
                {description}
              </Text>
            ))}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={[{ color: theme.colors.text }]}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {positions.map((position, index) => (
        <View key={index} style={[styles.card, { backgroundColor: "#eee" }]}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: theme.colors.skillsHeaderText,
              }}
            >
              {position.POS}
            </Text>
          </View>
          <View style={styles.content}>
            {Object.keys(position).map(
              (key, idx) =>
                key !== "POS" && (
                  <>
                    <View key={idx} style={styles.row}>
                      <View>
                        <Text style={[styles.label, { width: "100%" }]}>
                          {key}
                        </Text>
                      </View>
                      <View key={idx} style={{ width: "70%" }}>
                        {key === "HABS"
                          ? position[key]?.split(",").map((line, idx) =>
                              skillsNames.includes(line) ? (
                                <TouchableOpacity
                                  key={idx}
                                  onPress={() => showDescription(line)}
                                  style={{ marginBottom: 15 }}
                                >
                                  <Text
                                    key={idx}
                                    style={{
                                      color: theme.colors.skillsHeaderText,
                                    }}
                                  >
                                    {line}
                                  </Text>
                                </TouchableOpacity>
                              ) : (
                                <Text key={idx} style={[styles.value]}>
                                  {line}
                                </Text>
                              )
                            )
                          : position[key]?.split(",").map((line, idx) => (
                              <Text key={idx} style={[styles.value]}>
                                {line}
                              </Text>
                            ))}
                      </View>
                    </View>
                    <Divider />
                  </>
                )
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  content: {},
  card: {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    flexShrink: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    padding: 20,
    margin: 20,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  skillDescription: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default TableToCards;
