import { StyleSheet, Text, View } from "react-native";

export const Product = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>Product ID: {route.params?.id}</Text>
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
