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

  $('#note-header').hide()

  $('#show-change-password').hide()
  $('#change-password').hide()
  $('#show-change-password').on('click', authEvents.showChangePassword)
  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#show-notes').hide()
  $('#show-show-note').on('click', authEvents.showShowNotes)
  $('#show-notes').on('submit', authEvents.onShowNotes)

  $('#create-note').hide()
  $('#show-create-note').on('click', authEvents.showCreateNote)
  $('#create-note').on('submit', authEvents.onCreateNote)

  $('#delete-note').hide()
  $('#show-delete-note').on('click', authEvents.showDeleteNote)
  $('#delete-note').on('submit', authEvents.onDeleteNote)

  $('#update-note').hide()
  $('#show-update-note').on('click', authEvents.showUpdateNote)
  $('#update-note').on('submit', authEvents.onUpdateNote)
})
