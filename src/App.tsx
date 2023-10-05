import { motion, AnimatePresence } from "framer-motion"
import Header from "./components/Header.tsx";
import Content from "./Content.tsx";
import useTrivia from "./hooks/useTrivia.ts";
import QuestionCard from "./components/QuestionCard.tsx";
import AnswerButton from "./components/AnswerButton.tsx"
import Result from "./components/Result.tsx"
import { ArrowBigRight } from "lucide-react"
export default function App() {
  const {
    loadQuestions,
    questions,
    number,
    question,
    answers,
    selectedAnswer,
    handleSelection,
    isDisabled,
    nextQuestion,
    isLastQuestion,
    score,
    restartQuestions
  } = useTrivia()
  return (
    <div className="wrapper">
      <Header/>
      <Content
        questions={questions}
        loadQuestions={loadQuestions}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="game__container"
        >
          <AnimatePresence>
          {number < questions.length + 1 ? (
            <>
            <QuestionCard number={number} question={question} />
            <motion.div
              layout
              transition={{ duration: 0.2, delay: 0.1 }}
              className="game__container-answers"
            >
              {answers.map(answer => (
                <AnswerButton
                  key={answer}
                  answer={answer}
                  onClick={() => handleSelection(answer)}
                  className={`answer-btn ${
                  (selectedAnswer === answer && answer === question?.correctAnswer)
                ? 'correct'
                : (selectedAnswer === answer && answer !== question?.correctAnswer)
                ? 'wrong'
                : ''
                }`}
                  disabled={isDisabled}
                  aria-disabled={isDisabled}
                />
                ))}
            </motion.div>
            </>
          ): (
            <Result
              score={score}
              totalQuestions={questions.length}
            />
          )}
          <div className="game__container-controls">
            {number < questions.length + 1 ? (
              <div className="next">
                <button onClick={nextQuestion}>
                  {isLastQuestion ? 'Finish': 'Next'} <ArrowBigRight />
                </button>
              </div>
            ): (
              <div className="retry">
                <button onClick={restartQuestions}>Play Again</button>
              </div>
            )}
          </div>
          </AnimatePresence>
        </motion.div>
      </Content>
    </div>
  )
}

