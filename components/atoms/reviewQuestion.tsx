import React from "react";
import { StyleSheet, Text } from "react-native";
import { QuestionType } from "../template/review";

export const ReviewQuestion = ({
  question,
  index,
}: {
  question: QuestionType;
  index: number;
}) => {
  return (
    <Text style={styles.reviewQuestion}>
      Q{index + 1}: {question.question}
    </Text>
  );
};

const styles = StyleSheet.create({
  reviewCardContent: {
    flex: 1,
  },
  reviewQuestion: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 8,
  },
});
