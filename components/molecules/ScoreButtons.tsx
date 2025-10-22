import React from "react";
import { StyleSheet, View } from "react-native";
import PrimaryButton from "../atoms/PrimaryButton";
import SecondaryButton from "../atoms/SecondaryButton";

type ScoreButtonProps = {
  handleShowReview: () => void;
  handleRestart: () => void;
};

export const ScoreButtons = ({
  handleShowReview,
  handleRestart,
}: ScoreButtonProps) => {
  return (
    <View style={styles.scoreButtonsContainer}>
      <SecondaryButton
        onClick={handleShowReview}
        text="Review Answers"
        style={styles.fullWidthButton}
      />

      <PrimaryButton
        onclick={handleRestart}
        text="Restart Quiz"
        style={styles.fullWidthButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scoreButtonsContainer: {
    width: "100%",
    gap: 12,
  },
  fullWidthButton: {
    width: "100%",
  },
});
