'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./scripts/events')

$(() => {
  $('#sign-up').hide()
  $('#show-sign-up').on('click', authEvents.showSignUp)
  $('#sign-up').on('submit', authEvents.onSignUp)

  $('#sign-in').hide()
  $('#show-sign-in').on('click', authEvents.showSignIn)
  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#sign-out').hide()
  $('#show-sign-out').on('click', authEvents.showSignOut)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#show-change-password').hide()
  $('#change-password').hide()
  $('#show-change-password').on('click', authEvents.showChangePassword)
  $('#change-password').on('submit', authEvents.onChangePassword)


  $('#create-note').on('submit', authEvents.onCreateNote)
})
