import { ButtonHTMLAttributes } from "react";
import { motion, MotionProps } from "framer-motion"

type AnswerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & {
  answer: string
  disabled: boolean
}

const AnswerButton = ({ answer, disabled, ...restProps }: AnswerButtonProps) => {
  const animationProps = disabled
    ? {} // No animation when disabled
    : {
    whileHover: {
      scale: 1.1,
      transition: { duration: 0.5 },
    },
    whileTap: { scale: 0.9 },
  };
  
  return (
    <motion.button
      disabled={disabled}
      {...animationProps}
      {...restProps}
    >
      {answer}
    </motion.button>
  )
}

export default AnswerButton