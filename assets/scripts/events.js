'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data, 'Sign Up')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data, 'Sign In')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onStartGame = function (event) {
  event.preventDefault()
  console.log('start game')
  api.start()
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

const onGameBoard = function (event) {
  event.preventDefault()
  console.log('Board has been clicked')
  const cellId = event.target.id
  const data = getFormFields(event.target)

  api.gameBoard(cellId, data)
    .then(ui.onGameBoardSuccess)
    .catch(ui.onGameBoardFailure)
}

let currentPlayer = 'x'
const onPlayerChoice = function (event) {
  console.log(currentPlayer)
  // const cell = $(event.target)
  // const cellData = $(event.target).data('cell-index')
  // const value = cell.text()
  // const formData = getFormFields(cellData)
  // const player = formData.game.id
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
  // api.player(player, formData)
  //   .then(ui.onPlayerChoiceSuccess)
  //   .catch(ui.onPlayerChoiceFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onStartGame,
  onGameBoard,
  onPlayerChoice
}
