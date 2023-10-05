import Menu from './components/Menu';
import {Trivia} from "./types.ts";
import {ReactNode} from "react";

type ContentProps = {
  questions: Trivia[],
  loadQuestions: () => Promise<void>,
  children: ReactNode
}

const Content = ({ questions, loadQuestions, children }: ContentProps) => {
  return (
    <main>
      {questions.length < 1 ? (
        <Menu loadQuestions={loadQuestions}/>
      ): (
        <div>
          {children}
        </div>
      )}
    </main>
  )
}

export default Content