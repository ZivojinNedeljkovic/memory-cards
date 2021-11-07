import { CardView } from '../views/cardView'

type Player = {
  points: number
  wins: number
}

export type GameState = {
  movesPlayed: number
  gameOver: boolean
  currentMoveCards: CardView[]
  cards: string[]
  cardsLeftInTheGame: number
}

export const gameState: GameState = {
  movesPlayed: 0,
  gameOver: false,
  currentMoveCards: [],
  cards: [],
  cardsLeftInTheGame: 0,
}
