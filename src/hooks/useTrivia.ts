import { useState, useEffect } from 'react'
import { Trivia } from "../types"
import { fetchTrivia } from "../api/fetchTrivia.ts";
import { shuffleArray } from "../lib";

const useTrivia = () => {
  const [questions, setQuestions] = useState<Trivia[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [number, setNumber] = useState<number>(1);
  const [question, setQuestion] = useState<Trivia | undefined>();
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>('');
  const [score, setScore] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const isLastQuestion = number === questions.length;

  const shuffleAnswers = (correctAnswer: string | undefined, incorrectAnswers: string[] | undefined) => {
    return shuffleArray([correctAnswer!, ...incorrectAnswers!]);
  };

  const loadQuestions = async () => {
    await getTrivia();
  };

  const restartQuestions = async () => {
    if (questions.length > 1) {
      setNumber(1); // Reset to the first question
      setQuestion(questions[0]);
      setAnswers(shuffleAnswers(questions[0]?.correctAnswer, questions[0]?.incorrectAnswers));
      setSelectedAnswer('');
      setScore(0)

      // Reload the API and get new questions
      await loadQuestions();
    }
  };

  useEffect(() => {
    if (question) {
      setAnswers(shuffleAnswers(question.correctAnswer, question.incorrectAnswers));
    }
  }, [question]);

  const nextQuestion = () => {
    setNumber(number + 1);
    setQuestion(questions[number]);
    setIsDisabled(false);
  };

  const getTrivia = async () => {
    const trivia = await fetchTrivia();
    setQuestions(trivia);
    setQuestion(trivia[0]);
    setIsLoading(false);
  };

  const handleSelection = (selected: string) => {
    setSelectedAnswer(selected);
    setIsDisabled(true);
    if (selected === question?.correctAnswer) {
      console.log('Score before increment:', score);
      setScore(score + 1);
      console.log('Score after increment:', score + 1);
    }
  };

  return {
    questions,
    isLoading,
    loadQuestions,
    question,
    number,
    nextQuestion,
    isLastQuestion,
    answers,
    handleSelection,
    selectedAnswer,
    score,
    isDisabled,
    restartQuestions,
  };
};

export default useTrivia;
