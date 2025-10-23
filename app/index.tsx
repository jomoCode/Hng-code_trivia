import { Basic } from "@/components/template/basic";
import { ShowReview } from "@/components/template/ShowReview";
import { ShowScore } from "@/components/template/ShowScore";
import { Questions } from "@/utilities/question-bank";
import React, { useEffect, useState } from "react";

export default function TechTriviaQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(10).fill(null));
  const [showScore, setShowScore] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    if (timerActive && timeLeft > 0 && !showScore && !showReview) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showScore && !showReview) {
      handleNext();
    }
  }, [timeLeft, timerActive, showScore, showReview]);

  const handleAnswer = (optionIndex: any) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < 10) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      setShowScore(true);
      setTimerActive(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setTimeLeft(30);
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      if (answer === Questions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers(Array(Questions.length).fill(null));
    setShowScore(false);
    setShowReview(false);
    setTimeLeft(30);
    setTimerActive(true);
  };

  const handleShowReview = () => {
    setShowReview(true);
    setShowScore(false);
  };

  const handleBackToScore = () => {
    setShowReview(false);
    setShowScore(true);
  };

  if (showReview) {
    return (
      <ShowReview
        Questions={Questions}
        answers={answers}
        handleBackToScore={handleBackToScore}
        handleRestart={handleRestart}
      />
    );
  }

  if (showScore) {
    const score = calculateScore();
    const percentage = (score / Questions.length) * 100;

    return (
      <ShowScore
        handleRestart={handleRestart}
        handleShowReview={handleShowReview}
        percentage={percentage}
        score={score}
      />
    );
  }

  const question = Questions[currentQuestion];

  return (
    <Basic
      answers={answers}
      currentQuestion={currentQuestion}
      handleAnswer={handleAnswer}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
      options={question.options}
      question={question}
      timeLeft={timeLeft}
      totalNumberQuestions={10}
    />
  );
}
