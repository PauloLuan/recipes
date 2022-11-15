import { StyleSheet, Text, View } from "react-native";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>This is Home.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
