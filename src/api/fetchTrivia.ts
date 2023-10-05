import { Trivia } from "../types"

export async function fetchTrivia(): Promise<Trivia[]> {
  try {
    const apiUrl = 'https://the-trivia-api.com/v2/questions';
    const response = await fetch(apiUrl);

    const data = await response.json();
    return data as Trivia[];
    
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
}




