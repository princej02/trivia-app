import useTrivia from "./hooks/useTrivia.ts";

export default function Logic() {
  const {
    loadQuestions,
    questions,
    question,
    nextQuestion,
    number,
    isLastQuestion,
    answers,
    selectedAnswer,
    handleSelection,
    score,
    isDisabled
  } = useTrivia()

  return (
    <main className="wrapper">
      <div>
        <h2>Questions</h2>
        {questions.map(question => (
          <div key={question.id}>
            {question.question.text}
          </div>
          ))}
        <button onClick={loadQuestions}>Start</button>
      </div>
      <div className="question">
        <span>Question {number}</span>
        <span>Score: {score}</span>
        <span>{question?.question.text}</span>
        <div className="answers">
          {answers.map((answer) => (
            <button
              key={answer}
              onClick={() => handleSelection(answer)}
              className={`${
              (selectedAnswer === answer && answer === question?.correctAnswer)
              ? 'correct'
              : (selectedAnswer === answer && answer !== question?.correctAnswer)
              ? 'wrong'
              : ''
            }`}
              disabled={isDisabled}
              >
              {answer}
            </button>
            ))}
        </div>

        <button onClick={nextQuestion} disabled={isLastQuestion}>Next question</button>
      </div>
    </main>
    )
}

