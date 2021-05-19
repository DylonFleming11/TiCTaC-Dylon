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

const winCondition = function () {
  console.log(store)
  if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '') {
    if (store.game.cells[0] === store.game.cells[1] & store.game.cells[0] === store.game.cells[2]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.cells[3] !== '' && store.game.cells[4] !== '' && store.game.cells[5] !== '') {
    if (store.game.cells[3] === store.game.cells[4] & store.game.cells[3] === store.game.cells[5]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8] !== '') {
    if (store.game.cells[6] === store.game.cells[7] & store.game.cells[6] === store.game.cells[8]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.cells[0] !== '' && store.game.cells[3] !== '' && store.game.cells[6] !== '') {
    if (store.game.cells[0] === store.game.cells[3] & store.game.cells[0] === store.game.cells[6]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.cells[1] !== '' && store.game.cells[4] !== '' && store.game.cells[7] !== '') {
    if (store.game.cells[1] === store.game.cells[4] & store.game.cells[1] === store.game.cells[7]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.cells[2] !== '' && store.game.cells[5] !== '' && store.game.cells[8] !== '') {
    if (store.game.cells[2] === store.game.cells[5] & store.game.cells[2] === store.game.cells[8]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.cells[0] !== '' && store.game.cells[4] !== '' && store.game.cells[8] !== '') {
    if (store.game.cells[0] === store.game.cells[4] & store.game.cells[0] === store.game.cells[8]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '') {
    if (store.game.cells[2] === store.game.cells[4] & store.game.cells[2] === store.game.cells[6]) {
      $('.messaging-x-o').text('We have a winner!')
      store.game.over = true
    }
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' &&
    store.game.cells[3] !== '' && store.game.cells[4] !== '' && store.game.cells[5] !== '' &&
    store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8] !== '') {
    if (store.game.cells[0] === ('X' || 'O') && store.game.cells[1] === ('X' || 'O') && store.game.cells[2] === ('X' || 'O') &&
        store.game.cells[3] === ('X' || 'O') && store.game.cells[4] === ('X' || 'O') && store.game.cells[5] === ('X' || 'O') &&
        store.game.cells[6] === ('X' || 'O') && store.game.cells[7] === ('X' || 'O') && store.game.cells[8] === ('X' || 'O')) {
      $('.messaging-x-o').text('We have a DRAW!')
      store.game.over = true
    }
  }
}

const onPlayerChoiceSuccess = function (res) {
  console.log('Next player')
  $('.player-choice').show()
  store.game = res.game
  console.log(store)
  winCondition()
  if (store.game.over === true) {
    $('.game-board').hide()
  }
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
