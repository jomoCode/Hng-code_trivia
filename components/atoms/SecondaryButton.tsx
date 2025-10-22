import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SecondaryButton({
  handleBackToScore,
}: {
  handleBackToScore: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.button, styles.secondaryButton]}
      onPress={handleBackToScore}
    >
      <Text style={styles.buttonText}>Back to Score</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  secondaryButton: {
    backgroundColor: "#3b82f6",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
});
