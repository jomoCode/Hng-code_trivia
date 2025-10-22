import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ScoreSectionProps = { score: number; TotalNumberQuestions: number };

export const ScoreSection = ({
  score,
  TotalNumberQuestions,
}: ScoreSectionProps) => {
  return (
    <View style={styles.scoreSection}>
      <Text style={styles.scoreNumber}>
        {score}/{TotalNumberQuestions}
      </Text>
      <Text style={styles.scoreLabel}>Your Score</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  scoreNumber: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#9333ea",
  },
  scoreLabel: {
    fontSize: 18,
    color: "#6b7280",
    marginTop: 8,
  },
});
