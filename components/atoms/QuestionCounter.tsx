import React from "react";
import { StyleSheet, Text } from "react-native";

type QuestionCounterType = {
  currentQuestion: number;
  totalNumberQuestions: number;
};

export const QuestionCounter = ({
  currentQuestion,
  totalNumberQuestions,
}: QuestionCounterType) => {
  return (
    <Text style={styles.questionCounter}>
      Question {currentQuestion + 1} of {totalNumberQuestions}
    </Text>
  );
};

const styles = StyleSheet.create({
  questionCounter: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4b5563",
  },
});
