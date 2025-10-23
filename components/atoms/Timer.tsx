import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Time = { timeLeft: number };

export const Timer = ({ timeLeft }: Time) => {
  return (
    <View style={[styles.timerBadge, timeLeft <= 10 && styles.timerWarning]}>
      <Ionicons
        name="time-outline"
        size={18}
        color={timeLeft <= 10 ? "#dc2626" : "#2563eb"}
      />
      <Text
        style={[styles.timerText, timeLeft <= 10 && styles.timerWarningText]}
      >
        {timeLeft}s
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#dbeafe",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  timerWarning: {
    backgroundColor: "#fee2e2",
  },
  timerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563eb",
  },
  timerWarningText: {
    color: "#dc2626",
  },
});
