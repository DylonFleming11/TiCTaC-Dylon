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
  $('#after-sign-in').show()
  $('#before-sign-in').hide()
}

const signInFailure = function (err) {
  console.log(err)
  $('#messaging').text('Sign in error' + err)
}

const signOutSuccess = function (res) {
  store.user = null
  $('#messaging').text('succesfully Signed Out!')
  $('#after-sign-in').hide()
  $('#before-sign-in').show()
}

const signOutFailure = function () {
  $('#messaging').text('Failed to sign out')
}

const onStartGameSuccess = function (res) {
  $('#messaging').text('GET READY!')
}

const onStartGameFailure = function () {
  $('#messaging').text('try again..')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  onStartGameSuccess,
  onStartGameFailure
}
