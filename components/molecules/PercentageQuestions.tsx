import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const PercentageQuestions = ({ percentage }: { percentage: number }) => {
  return (
    <View style={styles.percentageSection}>
      <Text style={styles.percentageText}>{percentage.toFixed(0)}%</Text>
      <Text style={styles.performanceText}>
        {percentage >= 80
          ? "Excellent! 🎉"
          : percentage >= 60
          ? "Good job! 👍"
          : percentage >= 40
          ? "Not bad! 😊"
          : "Keep practicing! 💪"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  percentageSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  percentageText: {
    fontSize: 36,
    fontWeight: "600",
    color: "#1f2937",
  },
  performanceText: {
    fontSize: 16,
    color: "#6b7280",
    marginTop: 8,
  },
});
