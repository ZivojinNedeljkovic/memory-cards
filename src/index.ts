const playBtn = document.querySelector('.play-btn') as HTMLElement
const levels = document.querySelector('.levels') as HTMLElement
const customLevelBtn = document.querySelector(
  '.levels__custom-btn'
) as HTMLElement
const customLevelForm = document.querySelector('.custom-level') as HTMLElement

const easyLevelBtn = document.querySelector('.levels__easy-btn') as HTMLElement
const mediumLevelBtn = document.querySelector(
  '.levels__medium-btn'
) as HTMLElement
const hardLevelBtn = document.querySelector('.levels__hard-btn') as HTMLElement

localStorage.clear()

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

playBtn.addEventListener('click', onPlayBtnClick)
customLevelBtn.addEventListener('click', showCustomLevelForm)
easyLevelBtn.addEventListener('click', onEasyLevelBtnClick)
mediumLevelBtn.addEventListener('click', onMediumLevelBtnClick)
hardLevelBtn.addEventListener('click', onHardLevelBtnClick)

function onPlayBtnClick() {
  playBtn.classList.add('hide')
  levels.classList.remove('hide')
}

function showCustomLevelForm() {
  customLevelForm.classList.remove('hide')
}

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

function onCustomLevelBtnClick() {}
