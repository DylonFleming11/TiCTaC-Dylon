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
  api.gameBoard()
    .then(ui.onGameBoardSuccess)
    .catch(ui.onGameBoardFailure)
}

const onPlayerChoice = function (currentPlayer) {
  let player = 'p1'
  if (currentPlayer === 'p1') {
    player = 'p2'
  } else {
    player = 'p1'
  }
  api.player()
    .then(ui.onPlayerChoiceSuccess)
    .catch(ui.onPlayerChoiceFailure)
  return player
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onStartGame,
  onGameBoard,
  onPlayerChoice
}
