import { motion } from 'framer-motion'

interface ResultProps {
  score: number
  totalQuestions: number
}

const Result = ({ score, totalQuestions }: ResultProps) => {
  const percentage = score / totalQuestions;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="result_container"
    >
      <h2>Result</h2>
      <h4>You scored a total of <span className={percentage > 0.5 ? 'good': 'bad'}>{score}</span> out of <span>{totalQuestions}</span></h4>
    </motion.div>
  )
}

export default Result