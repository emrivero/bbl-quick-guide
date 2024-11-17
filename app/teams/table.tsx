import { CustomTheme } from "@/themes/dark";
import React, { FC } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Card, Divider, useTheme } from "react-native-paper";

interface TeamData {
  header: string;
  values: string[];
}

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {positions.map((position, index) => (
        <Card key={position.POS} style={styles.card}>
          <View style={{ alignContent: "center" }}>
            <Card.Title
              titleStyle={{
                fontSize: 20,
                fontWeight: "700",
              }}
              title={position.POS}
            />
          </View>
          <Card.Content>
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
                      <View style={{ width: "70%" }}>
                        {position[key]?.split(",").map((line, idx) => (
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
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  card: {
    marginTop: 20,
    marginBottom: 10,
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
});

export default TableToCards;
