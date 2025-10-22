import React from "react";
import { StyleSheet, View } from "react-native";
import PrimaryButton from "../atoms/PrimaryButton";
import SecondaryButton from "../atoms/SecondaryButton";

type ButtonsContainerType = {
  handleBackToScore: () => void;
  handleRestart: () => void;
};

export const ButtonsContainer = ({
  handleBackToScore,
  handleRestart,
}: ButtonsContainerType) => {
  return (
    <View style={styles.reviewButtonsContainer}>
      <SecondaryButton text='Back to score' onClick={handleBackToScore} />

      <PrimaryButton text="Restart Quiz" onclick={handleRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  reviewButtonsContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
});
