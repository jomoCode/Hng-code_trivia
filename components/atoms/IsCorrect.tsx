import React from "react";
import { StyleSheet, Text } from "react-native";
import { QuestionType } from "../template/review";

export const IsCorrect = ({ question }: { question: QuestionType }) => {
  return (
    <Text style={styles.correctAnswerText}>
      Correct answer: {question.options[question.correctAnswer]}
    </Text>
  );
};

const styles = StyleSheet.create({
  correctAnswerText: {
    fontSize: 14,
    color: "#15803d",
    fontWeight: "500",
  },
});
