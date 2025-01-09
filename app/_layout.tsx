import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const theme = useColorScheme() || 'light';
  return <Stack screenOptions={{headerShown: false, statusBarBackgroundColor: Colors[theme].background}}/>;
}
