import { StyleSheet, Text } from "react-native";

export const NotAnswered = () => {
  return <Text style={styles.unansweredText}>Not answered (time ran out)</Text>;
};

const styles = StyleSheet.create({
  unansweredText: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 4,
  },
});
