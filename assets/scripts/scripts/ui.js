'use strict'
const store = require('./../store')

const signUpSuccess = () => {
  $('form').trigger('reset')
  $('#authNotification').text('successfully signed up')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
  $('#sign-up').hide()
}
const signUpFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('sign up failed')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const signInSuccess = (data) => {
  $('form').trigger('reset')
  $('#authNotification').text('signed in')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#show-change-password').show()
  $('#show-sign-in').hide()
  $('#show-sign-up').hide()
  store.user = data.user
}
const signInFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('sign in failed')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const changePasswordSuccess = () => {
  $('form').trigger('reset')
  $('#authNotification').text('password changed')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
  $('#change-password').hide()
  $('#sign-out').show()
}
const changePasswordFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('password change failed')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const signOutSuccess = () => {
  $('form').trigger('reset')
  $('#authNotification').text('signed out')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
  $('#sign-out').hide()
  $('#show-change-password').hide()
  $('#show-sign-in').show()
  $('#show-sign-up').show()
}

const signOutFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('failed to sign out')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
