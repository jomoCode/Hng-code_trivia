import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "../atoms/ProgressBar";
import { Header } from "../molecules/Header";
import Navigation from "../molecules/Navigation";
import { Options } from "../molecules/Options";
import { QuestionType } from "./review";

type basicProps = {
  handleAnswer: (index: number) => void;
  handleNext: () => void;
  handlePrevious: () => void;
  question: QuestionType;
  currentQuestion: number;
  timeLeft: number;
  totalNumberQuestions: number;
  answers: number[];
  options: string[];
};

export const Basic = ({
  currentQuestion,
  timeLeft,
  totalNumberQuestions,
  answers,
  handleAnswer,
  options,
  handlePrevious,
  handleNext,
  question,
}: basicProps) => {
  return (
    <LinearGradient colors={["#9333ea", "#3b82f6"]} style={styles.container}>
      <View style={styles.quizContainer}>
        {/* HEADER */}
        <Header
          currentQuestion={currentQuestion}
          timeLeft={timeLeft}
          totalNumberQuestions={totalNumberQuestions}
        />

        {/* Progress bar */}
        <ProgressBar
          currentQuestion={currentQuestion}
          totalNumberQuestions={totalNumberQuestions}
        />

        <Text style={styles.questionText}>{question.question}</Text>

        {/* Options */}

        <Options
          answers={answers}
          currentQuestion={currentQuestion}
          handleAnswer={handleAnswer}
          options={options}
        />

        {/* Navigation */}
        <Navigation
          currentQuestion={currentQuestion}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          totalNumberQuestions={totalNumberQuestions}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  quizContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  questionText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 24,
  },
});
