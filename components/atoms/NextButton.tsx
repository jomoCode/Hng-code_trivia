import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type NextButtonProps = {
  currentQuestion: number;
  totalNumberQuestions: number;
  handleNext: () => void;
};

export const NextButton = ({
  currentQuestion,
  totalNumberQuestions,
  handleNext,
}: NextButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.navButton, styles.nextButton]}
      onPress={handleNext}
    >
      <Text style={[styles.navButtonText, styles.nextButtonText]}>
        {currentQuestion === totalNumberQuestions - 1 ? "Finish" : "Next"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "#9333ea",
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  nextButtonText: {
    color: "white",
  },

});
