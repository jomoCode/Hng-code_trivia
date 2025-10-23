import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type PreviousButtonType = {
  currentQuestion: number;
  handlePrevious: () => void;
};

export const PreviousButton = ({
  currentQuestion,
  handlePrevious,
}: PreviousButtonType) => {
  return (
    <TouchableOpacity
      style={[
        styles.navButton,
        styles.previousButton,
        currentQuestion === 0 && styles.disabledButton,
      ]}
      onPress={handlePrevious}
      disabled={currentQuestion === 0}
    >
      <Text
        style={[
          styles.navButtonText,
          styles.previousButtonText,
          currentQuestion === 0 && styles.disabledButtonText,
        ]}
      >
        Previous
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
  previousButton: {
    backgroundColor: "#d1d5db",
  },
  disabledButton: {
    backgroundColor: "#e5e7eb",
    opacity: 0.5,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  previousButtonText: {
    color: "#374151",
  },

  disabledButtonText: {
    color: "#9ca3af",
  },
});
