import {Trivia} from "../types.ts";

type QuestionCardProps = {
  number: number
  question: Trivia | undefined
}
const QuestionCard = ({ number, question }: QuestionCardProps) => {
  return (
    <div className="question">
      <div className="number">Question {number}.</div>
      <div>{question?.question.text}</div>
    </div>
  )
}

export default QuestionCard