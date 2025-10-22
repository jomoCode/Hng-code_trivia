import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

export default function PrimaryButton({
  onclick,
  text,
  style
}: {
  onclick: () => void;
  text:string;
  style?: ViewStyle
}) {
  return (
    <TouchableOpacity
      style={[styles.button, styles.primaryButton, style]}
      onPress={onclick}
    >
      <Ionicons name="refresh" size={20} color="white" />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  primaryButton: {
    backgroundColor: "#9333ea",
  },
});
