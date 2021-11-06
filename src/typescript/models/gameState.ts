import { CardView } from '../views/cardView'

type Player = {
  points: number
  wins: number
}

export type GameState = {
  attemptsMade: number
  gameOver: boolean
  currentAttemptCards: CardView[]
  cards?: string[]
  cardsLeft?: number
}

export const gameState: GameState = {
  attemptsMade: 0,
  gameOver: false,
  currentAttemptCards: [],
}
