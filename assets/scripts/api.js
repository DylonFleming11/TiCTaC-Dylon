const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/sign-up'
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/sign-in'
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const start = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const gameBoard = function () {
  return $.ajax({})
}

const player = function () {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  start,
  gameBoard,
  player
}
