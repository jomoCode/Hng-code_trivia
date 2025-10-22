import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Answered } from "../atoms/Answered";
import { IsCorrect } from "../atoms/IsCorrect";
import { NotAnswered } from "../atoms/NotAnswered";
import { ReviewQuestion } from "../atoms/reviewQuestion";

export type QuestionType = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

type ReviewProps = {
  isCorrect: boolean;
  wasAnswered: boolean;
  userAnswer: number;
  question: QuestionType;
  index: number;
};

export const Review = ({
  isCorrect,
  wasAnswered,
  userAnswer,
  question,
  index,
}: ReviewProps) => {
  return (
    <View
      key={question.id}
      style={[
        styles.reviewCard,
        isCorrect
          ? styles.correctCard
          : wasAnswered
          ? styles.incorrectCard
          : styles.unansweredCard,
      ]}
    >
      <View style={styles.reviewCardHeader}>
        <Ionicons
          name={isCorrect ? "checkmark-circle" : "close-circle"}
          size={24}
          color={isCorrect ? "#16a34a" : "#dc2626"}
        />
        <View style={styles.reviewCardContent}>
          <ReviewQuestion question={question} index={index} />
          {wasAnswered && (
            <Answered
              isCorrect={isCorrect}
              question={question}
              userAnswer={userAnswer}
            />
          )}

          {!wasAnswered && <NotAnswered />}

          {!isCorrect && <IsCorrect question={question} />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 16,
  },
  correctCard: {
    backgroundColor: "#f0fdf4",
    borderColor: "#86efac",
  },
  incorrectCard: {
    backgroundColor: "#fef2f2",
    borderColor: "#fca5a5",
  },
  unansweredCard: {
    backgroundColor: "#f9fafb",
    borderColor: "#d1d5db",
  },
  reviewCardHeader: {
    flexDirection: "row",
    gap: 12,
  },
  reviewCardContent: {
    flex: 1,
  },

});
