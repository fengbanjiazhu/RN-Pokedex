import { StyleSheet, Text, View } from "react-native";
import ThreeDCanvas from "./src/components/ThreeDCanvas";

export default function App() {
  return (
    <View style={styles.container}>
      <ThreeDCanvas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
