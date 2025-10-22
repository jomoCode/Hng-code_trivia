import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ButtonsContainer } from "../molecules/ButtonsContainer";
import { QuestionType, Review } from "./review";

type ShowReviewProp = {
  handleBackToScore: () => void;
  handleRestart: () => void;
  Questions: QuestionType[];
  answers: never[];
};
export const ShowReview = ({
  handleBackToScore,
  handleRestart,
  Questions,
  answers,
}: ShowReviewProp) => {
  return (
    <LinearGradient
      colors={["#9333ea", "#3b82f6"]}
      style={{
        flex: 1,
      }}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewTitle}>Review Answers</Text>

          {Questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.correctAnswer;
            const wasAnswered = userAnswer !== null;

            return (
              <Review
                index={index}
                isCorrect={isCorrect}
                question={q}
                userAnswer={userAnswer}
                wasAnswered={wasAnswered}
                key={`${q.question[0] + index}`}
              />
            );
          })}

          <ButtonsContainer
            handleBackToScore={handleBackToScore}
            handleRestart={handleRestart}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  reviewContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  reviewTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 24,
  },

});
