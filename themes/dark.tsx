import { DarkTheme, Theme } from "@react-navigation/native";

export type CustomTheme = Theme & {
  colors: Theme["colors"] & {
    textMenu: string;
    skillsHeaderText: string;
  };
};

export const DarkCustomTheme: CustomTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    primary: "rgb(10, 132, 255)",
    background: "rgb(20, 20, 20)",
    card: "rgb(18, 18, 18)",
    text: "rgb(229, 229, 231)",
    border: "rgb(39, 39, 41)",
    notification: "rgb(255, 69, 58)",
    textMenu: "#914f26",
    skillsHeaderText: "#914f26",
  },
};
