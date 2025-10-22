import React from "react";
import { StyleSheet, Text, View } from "react-native";

type statProps = { totalNumberQuestions: number; score: number };

export const Stats = ({ totalNumberQuestions, score }: statProps) => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statsRow}>
        <Text style={styles.correctStat}>Correct: {score}</Text>
        <Text style={styles.incorrectStat}>
          Incorrect: {totalNumberQuestions - score}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    width: "100%",
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  correctStat: {
    fontSize: 14,
    fontWeight: "600",
    color: "#16a34a",
  },
  incorrectStat: {
    fontSize: 14,
    fontWeight: "600",
    color: "#dc2626",
  },
});
