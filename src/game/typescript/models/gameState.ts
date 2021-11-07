import { CardView } from '../views/cardView'

type Player = {
  points: number
  wins: number
}

export type GameState = {
  movesPlayed: number
  gameOver: boolean
  currentMoveCardViews: CardView[]
  cards: string[]
  cardsLeftInTheGame: number
}

export const gameState: GameState = {
  movesPlayed: 0,
  gameOver: false,
  currentMoveCardViews: [],
  cards: [],
  cardsLeftInTheGame: 0,
}
