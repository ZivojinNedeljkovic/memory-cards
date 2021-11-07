const playBtn = document.querySelector('.play-btn') as HTMLElement
const levels = document.querySelector('.levels') as HTMLElement
const customLevelBtn = document.querySelector(
  '.levels__custom-btn'
) as HTMLElement
const customLevelForm = document.querySelector('.custom-level') as HTMLElement

playBtn.addEventListener('click', onPlayBtnClick)
customLevelBtn.addEventListener('click', showCustomLevelForm)

function onPlayBtnClick() {
  playBtn.classList.add('hide')
  levels.classList.remove('hide')
}

function showCustomLevelForm() {
  customLevelForm.classList.remove('hide')
}
