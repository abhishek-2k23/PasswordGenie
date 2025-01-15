import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

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
