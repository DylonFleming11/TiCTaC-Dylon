'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.start-game').on('click', authEvents.onStartGame)
  $('.game-board').on('click', authEvents.onGameBoard)
  $('.after-sign-in').hide()
  $('.after-game-start').hide()
  $('.player-choice').on('click', authEvents.onPlayerChoice)
  $('data-cell-index').on('click', function (event) {
    $(event.target).data('id')
  })
})
