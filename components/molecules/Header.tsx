import React from "react";
import { StyleSheet, View } from "react-native";
import { QuestionCounter } from "../atoms/QuestionCounter";
import { Timer } from "../atoms/Timer";

type HeaderProps = {
  timeLeft: number;
  currentQuestion: number;
  totalNumberQuestions: number;
};

export const Header = ({
  timeLeft,
  currentQuestion,
  totalNumberQuestions,
}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <QuestionCounter
        currentQuestion={currentQuestion}
        totalNumberQuestions={totalNumberQuestions}
      />
      <Timer timeLeft={timeLeft} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});
