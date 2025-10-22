import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import { PercentageQuestions } from "../molecules/PercentageQuestions";
import { ScoreButtons } from "../molecules/ScoreButtons";
import { ScoreSection } from "../molecules/ScoreSection";
import { Stats } from "../molecules/Stats";

type showScoreProps =  {
  score: number;
  percentage: number;
  handleRestart: () => void;
  handleShowReview: () => void;
}

export const ShowScore = ({
  score,
  percentage,
  handleRestart,
  handleShowReview,
}: showScoreProps) => {
  return (
    <LinearGradient colors={["#9333ea", "#3b82f6"]} style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreCard}>
          <ScoreSection TotalNumberQuestions={10} score={score} />
          <PercentageQuestions percentage={percentage} />
          <Stats score={score} totalNumberQuestions={10} />
          <ScoreButtons
            handleRestart={handleRestart}
            handleShowReview={handleShowReview}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  scoreCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 32,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
