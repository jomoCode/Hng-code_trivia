import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { OptionContent } from "../atoms/OptionsContent";

type OptionsType = {
  options: string[];
  answers: number[];
  currentQuestion: number;
  handleAnswer: (index: number) => void;
};

export const Options = ({
  options,
  answers,
  currentQuestion,
  handleAnswer
}: OptionsType) => {
  return (
    <View style={styles.optionsContainer}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            answers[currentQuestion] === index && styles.selectedOption,
          ]}
          onPress={()=>handleAnswer(index)}
        >
          <OptionContent
            answers={answers}
            currentQuestion={currentQuestion}
            index={index}
            option={option}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    flex: 1,
    gap: 12,
  },
  optionButton: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#e5e7eb",
    backgroundColor: "white",
  },
  selectedOption: {
    borderColor: "#9333ea",
    backgroundColor: "#faf5ff",
    shadowColor: "#9333ea",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
