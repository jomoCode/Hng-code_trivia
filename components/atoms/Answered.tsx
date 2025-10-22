import React from "react";
import { StyleSheet, Text } from "react-native";
import { QuestionType } from "../template/review";

type AnsweredType = {
  isCorrect: boolean;
  question: QuestionType;
  userAnswer: number;
};

export const Answered = ({ isCorrect, question, userAnswer }: AnsweredType) => {
  return (
    <Text
      style={[
        styles.reviewAnswer,
        isCorrect ? styles.correctText : styles.incorrectText,
      ]}
    >
      Your answer: {question.options[userAnswer]}
    </Text>
  );
};

const styles = StyleSheet.create({
  reviewAnswer: {
    fontSize: 14,
    marginBottom: 4,
  },
  correctText: {
    color: "#15803d",
  },
  incorrectText: {
    color: "#b91c1c",
  },
});
