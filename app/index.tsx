import { CustomTheme } from "@/themes/dark";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Link } from "expo-router";
import {
  Appearance,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const logo = require("../assets/images/logo.webp");

export default function Index() {
  const theme = useTheme() as CustomTheme;
  const color = Appearance.getColorScheme();

  const toggleColorTheme = () => {
    Appearance.setColorScheme(color === "dark" ? "light" : "dark");
  };

  const MenuLink = ({ href, children }) => (
    <Link href={href} style={[styles.button, { color: theme.colors.textMenu }]}>
      {children}
    </Link>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.header1, { fontFamily: "Sporting" }]}>
        Blood Bowl!
      </Text>
      <Text style={styles.header2}>Referencia Rápida</Text>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Link href={"/pages"}>
          <Text style={[{ fontSize: 40, color: theme.colors.textMenu }]}>
            Entrar
          </Text>
        </Link>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={toggleColorTheme} style={styles.iconButton}>
          <MaterialIcons
            color={theme.colors.text}
            size={32}
            name={color === "dark" ? "sunny" : "nightlight"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  header1: {
    fontSize: 48,
    fontWeight: "bold",
    textShadowColor: "#de3730",
    color: "#014ba0",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 8,
  },
  header2: {
    fontSize: 32,
    color: "gray",
    marginBottom: 12,
  },
  menu: {
    width: "100%",
    height: "100%",
    padding: 8,
  },
  button: {
    fontSize: 28,
    paddingVertical: 2,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    fontSize: 18,
    marginRight: 10,
  },
  iconButton: {
    padding: 1,
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
