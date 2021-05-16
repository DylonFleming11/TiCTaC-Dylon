'use strict'
const store = require('./store')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#messaging').text('Signed up succesfully!')
}

const signUpFailure = function (err) {
  console.log(err)
  $('#messaging').text('Sign in error' + err)
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  $('#messaging').text('Signed in succesfully!')
  console.log(store)
  store.user = res.user
  console.log(store)
  $('.after-sign-in').show()
  $('.before-sign-in').hide()
  $('.start-game').show()
  $('.before-game-start').hide()
}

const signInFailure = function (err) {
  console.log(err)
  $('#messaging').text('Sign in error' + err)
}

const signOutSuccess = function (res) {
  store.user = null
  $('#messaging').text('succesfully Signed Out!')
  $('.after-sign-in').hide()
  $('.before-sign-in').show()
}

const signOutFailure = function () {
  $('#messaging').text('Failed to sign out')
}

const onStartGameSuccess = function (res) {
  console.log(res)
  console.log('starting game')
  $('#messaging').text('GET READY!')
  $('.after-game-start').show()
}

const onStartGameFailure = function () {
  $('#messaging').text('try again..')
}

const onGameBoardSuccess = function (res) {
  console.log('successful game board interaction')
  store.user = res.game
}

const onGameBoardFailure = function () {
  console.log('error with game board interaction')
}

const onPlayerChoiceSuccess = function () {
  console.log('Next player')
  $('.player-choice').show()
}

const onPlayerChoiceFailure = function () {
  console.log('Didnt switch - error')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  onStartGameSuccess,
  onStartGameFailure,
  onGameBoardSuccess,
  onGameBoardFailure,
  onPlayerChoiceSuccess,
  onPlayerChoiceFailure
}
