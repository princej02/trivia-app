import { Play } from 'lucide-react'
import { motion } from 'framer-motion'

const Menu = ({ loadQuestions }: { loadQuestions: () => Promise<void> }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="menu"
    >
      <h3>Welcome to BrainBurst! Unleash your knowledge and conquer the quiz challenge.</h3>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="menu-btn" onClick={async () => await loadQuestions()}
      >
        <Play />
      </motion.button>
    </motion.div>
  )
}

export default Menu