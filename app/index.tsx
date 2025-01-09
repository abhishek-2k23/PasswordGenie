import { ThemedText } from "@/app-example/components/ThemedText";
import { ThemedView } from "@/app-example/components/ThemedView";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>Welcome to Password Genie! 👋</ThemedText>
    </ThemedView>
  );
}
