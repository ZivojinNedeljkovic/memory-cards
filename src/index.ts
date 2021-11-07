localStorage.clear()

const playBtn = document.querySelector('.play-btn') as HTMLElement

const levels = document.querySelector('.levels') as HTMLElement

const easyLevelBtn = document.querySelector('.levels__easy-btn') as HTMLElement

const mediumLevelBtn = document.querySelector(
  '.levels__medium-btn'
) as HTMLElement

const hardLevelBtn = document.querySelector('.levels__hard-btn') as HTMLElement

const customLevelBtn = document.querySelector(
  '.levels__custom-btn'
) as HTMLElement

const customLevelForm = document.querySelector('.custom-level') as HTMLElement

playBtn.addEventListener('click', onPlayBtnClick)
customLevelBtn.addEventListener('click', onCustomLevelBtnClick)
easyLevelBtn.addEventListener('click', onEasyLevelBtnClick)
mediumLevelBtn.addEventListener('click', onMediumLevelBtnClick)
hardLevelBtn.addEventListener('click', onHardLevelBtnClick)
customLevelForm.addEventListener('submit', onCustomLevelFormSubmit)

function onPlayBtnClick() {
  playBtn.classList.add('hide')
  levels.classList.remove('hide')
}

function onCustomLevelBtnClick() {
  customLevelForm.classList.toggle('hide')
}

const setGamaParameters = (params: {
  rows: number
  columns: number
  cardsInTheGame: number
  cardsPerMove: number
}) => {
  localStorage.setItem('rows', `${params.rows}`)
  localStorage.setItem('columns', `${params.columns}`)
  localStorage.setItem('cardsInTheGame', `${params.cardsInTheGame}`)
  localStorage.setItem('cardsPerMove', `${params.cardsPerMove}`)
}

const goToGame = () => location.replace('./src/game/game.html')

function onEasyLevelBtnClick() {
  setGamaParameters({
    rows: 4,
    columns: 5,
    cardsInTheGame: 6,
    cardsPerMove: 2,
  })
  goToGame()
}

function onMediumLevelBtnClick() {
  setGamaParameters({
    rows: 5,
    columns: 8,
    cardsInTheGame: 6,
    cardsPerMove: 2,
  })
  goToGame()
}

function onHardLevelBtnClick() {
  setGamaParameters({
    rows: 6,
    columns: 9,
    cardsInTheGame: 6,
    cardsPerMove: 2,
  })
  goToGame()
}

function onCustomLevelFormSubmit(event: any) {
  event.preventDefault()

  const getInputData = () => {
    return {
      rows: +(
        document.querySelector('.custom-level__rows-input') as HTMLInputElement
      ).value,
      columns: +(
        document.querySelector(
          '.custom-level__columns-input'
        ) as HTMLInputElement
      ).value,
      cardsInTheGame: +(
        document.querySelector(
          '.custom-level__cards-in-the-game-input'
        ) as HTMLInputElement
      ).value,

      cardsPerMove: +(
        document.querySelector(
          '.custom-level__cards-per-move-input'
        ) as HTMLInputElement
      ).value,
    }
  }

  const { rows, columns, cardsInTheGame, cardsPerMove } = getInputData()

  const numberOfCardsInTheGame = rows * columns

  if (numberOfCardsInTheGame < cardsPerMove)
    return alert(
      "Cards per move can't be larger then number of cards in the game. Increase number of rows or columns"
    )

  if (numberOfCardsInTheGame % cardsPerMove !== 0)
    return alert(
      'Number of cards in the game bust be divisible by cards per move. Change number of rows or columns'
    )

  setGamaParameters({
    rows: rows,
    columns: columns,
    cardsInTheGame: cardsInTheGame,
    cardsPerMove: cardsPerMove,
  })
  goToGame()
}

console.log('Made by Živojin Nedeljković for dresscode halloween hackathon 🎃')
