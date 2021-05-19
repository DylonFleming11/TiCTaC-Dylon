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
  store.game = res.game
  console.log(store, 'ui store here!')
  $('#messaging').text('GET READY!')
  $('.after-game-start').show()
}

const onStartGameFailure = function () {
  $('#messaging').text('try again..')
}

const winCondition = function (store) {
  if (store.game.index[0] !== '' && store.game.index[1] !== '' && store.game.index[2] !== '') {
    if (store.game.index[0] === store.game.index[1] & store.game.index[0] === store.game.index[2]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.index[3] !== '' && store.game.index[4] !== '' && store.game.index[5] !== '') {
    if (store.game.index[3] === store.game.index[4] & store.game.index[3] === store.game.index[5]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.index[6] !== '' && store.game.index[7] !== '' && store.game.index[8] !== '') {
    if (store.game.index[6] === store.game.index[7] & store.game.index[6] === store.game.index[8]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.index[0] !== '' && store.game.index[3] !== '' && store.game.index[6] !== '') {
    if (store.game.index[0] === store.game.index[3] & store.game.index[0] === store.game.index[6]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.index[1] !== '' && store.game.index[4] !== '' && store.game.index[7] !== '') {
    if (store.game.index[1] === store.game.index[4] & store.game.index[1] === store.game.index[7]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.index[2] !== '' && store.game.index[5] !== '' && store.game.index[8] !== '') {
    if (store.game.index[2] === store.game.index[5] & store.game.index[2] === store.game.index[8]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.index[0] !== '' && store.game.index[4] !== '' && store.game.index[8] !== '') {
    if (store.game.index[0] === store.game.index[4] & store.game.index[0] === store.game.index[8]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.index[0] !== '' && store.game.index[1] !== '' && store.game.index[2] !== '') {
    if (store.game.index[2] === store.game.index[4] & store.game.index[2] === store.game.index[6]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.index[0] !== '' && store.game.index[0] !== '' && store.game.index[0] !== '' &&
    store.game.index[0] !== '' && store.game.index[0] !== '' && store.game.index[0] !== '' &&
    store.game.index[0] !== '' && store.game.index[0] !== '' && store.game.index[0] !== '') {
    $('.messaging-x-o').text('We have a DRAW!')
    store.game.over = true
  }
}

const onPlayerChoiceSuccess = function (res) {
  console.log('Next player')
  $('.player-choice').show()
  store.game = res.game
  console.log(store)
  winCondition()
  $('.game-board').hide()
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
  onPlayerChoiceSuccess,
  onPlayerChoiceFailure,
  winCondition
}
