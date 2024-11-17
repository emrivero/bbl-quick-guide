import { DefaultTheme } from "@react-navigation/native";
import { CustomTheme } from "./dark";

export const LightTheme: CustomTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    primary: "rgb(0, 122, 255)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(216, 216, 216)",
    notification: "rgb(255, 59, 48)",
    textMenu: "rgb(0, 92, 255)",
    skillsHeaderText: "rgb(0, 92, 255)",
  },
};
