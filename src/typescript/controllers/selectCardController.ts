import { FLIP_CARD_ANIMATION_DURATION } from '../models/gameConfig'
import { gameState } from '../models/gameState'
import { CardView } from '../views/cardView'
import { submitController } from './submitController'

export function selectCardController(card: CardView) {
  card.flip(FLIP_CARD_ANIMATION_DURATION)
  card.clickable = false

  gameState.currentAttemptCards.push(card)

  if (gameState.currentAttemptCards.length === 2) submitController()
}
