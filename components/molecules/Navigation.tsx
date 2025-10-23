import React from "react";
import { StyleSheet, View } from "react-native";
import { NextButton } from "../atoms/NextButton";
import { PreviousButton } from "../atoms/PreviousButton";

type NavigationProps = {
  currentQuestion: number;
  handlePrevious: () => void;
  totalNumberQuestions: number;
  handleNext: () => void;
};

const Navigation = ({
  currentQuestion,
  handlePrevious,
  totalNumberQuestions,
  handleNext,
}: NavigationProps) => {
  return (
    <View style={styles.navigationContainer}>
      <PreviousButton
        currentQuestion={currentQuestion}
        handlePrevious={handlePrevious}
      />

      <NextButton
        currentQuestion={currentQuestion}
        handleNext={handleNext}
        totalNumberQuestions={totalNumberQuestions}
      />
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },
});
