export function shuffleArray(arr: string[]): string[] {
  const shuffledArr = [...arr]
  
  // Fisher-yates shuffle algorithm
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]]
  }
  
  return shuffledArr
}
