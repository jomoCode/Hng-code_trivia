import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

export default function SecondaryButton({
  onClick,
  text,
  style
}: {
  onClick: () => void;
  text:string;
  style?:ViewStyle
}) {
  return (
    <TouchableOpacity
      style={[styles.button, styles.secondaryButton, style]}
      onPress={onClick}
    >
      <Text style={styles.buttonText}>{text}</Text>
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
