import React from "react";
import { StyleSheet, View } from "react-native";

type ProgressBarType = {
  currentQuestion: number;
  totalNumberQuestions: number;
};

export const ProgressBar = ({
  currentQuestion,
  totalNumberQuestions,
}: ProgressBarType) => {
  return (
    <View style={styles.progressBarContainer}>
      <View
        style={[
          styles.progressBar,
          {
            width: `${((currentQuestion + 1) / totalNumberQuestions) * 100}%`,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    height: 8,
    backgroundColor: "#e5e7eb",
    borderRadius: 4,
    marginBottom: 24,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#9333ea",
    borderRadius: 4,
  },
});
