import React from "react";
import { StyleSheet, Text, View } from "react-native";

type OptionsType = {
  answers: number[];
  currentQuestion: number;
  index: number;
  option: string;
};

export const OptionContent = ({
  answers,
  currentQuestion,
  index,
  option,
}: OptionsType) => {
  return (
    <View style={styles.optionContent}>
      <View
        style={[
          styles.radioOuter,
          answers[currentQuestion] === index && styles.radioSelected,
        ]}
      >
        {answers[currentQuestion] === index && (
          <View style={styles.radioInner} />
        )}
      </View>
      <Text style={styles.optionText}>{option}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#d1d5db",
    justifyContent: "center",
    alignItems: "center",
  },
  radioSelected: {
    borderColor: "#9333ea",
    backgroundColor: "#9333ea",
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "white",
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: "#1f2937",
  },
});
