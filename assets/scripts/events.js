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

let currentPlayer = 'X'
const onPlayerChoice = function (event) {
  const playerChoice = $(event.target)
  if ($(playerChoice).text() === '') {
    playerChoice.text(currentPlayer)
    const cellId = playerChoice.data('cell-index')
    console.log(cellId)
    // const data = currentPlayer
    api.gameBoard(cellId, currentPlayer)
      .then(ui.onPlayerChoiceSuccess)
      .catch(ui.onPlayerChoiceFailure)
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
  } else if ($(playerChoice).text() !== '') {
    $(playerChoice).text()
  }
}

const onNextGame = function (event) {
  event.preventDefault()
  console.log('start game')
  api.next()
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onStartGame,
  onPlayerChoice,
  onNextGame
}
