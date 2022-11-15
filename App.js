import { StyleSheet, View } from "react-native";
import Mega from "./src/components/Mega";

export default function App() {
  return (
    <View style={styles.container}>
      <Mega qtdNum={12} />
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
