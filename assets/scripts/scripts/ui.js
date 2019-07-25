'use strict'
const store = require('./../store')
const showNotesTemplate = require('./../templates/note-listing.handlebars')

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
  $('#sign-up').hide()
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
  $('#note-header').show()
  $('#show-notes').show()
}
const signInFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('sign in failed')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
  $('#sign-in').hide()
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
  $('#change-password').hide()
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
  $('#note-header').hide()
  $('#content').text('')
  $('#create-note').hide()
  $('#update-note').hide()
  $('#delete-note').hide()
}

const signOutFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('failed to sign out')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const showNotesSuccess = (data) => {
  const showNotesHtml =
  showNotesTemplate({ notes:
  data.notes})
  $('.content').append(showNotesHtml)
  $('#authNotification').text('notes updated successfully')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
  $('#create-note').hide()
  $('#delete-note').hide()
  $('#update-note').hide()
}

const showNotesFailure = () => {
  $('#authNotification').text('show notes failure/no notes to show')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const createNoteSuccess = (data) => {
  $('#create-note').hide()
  $('form').trigger('reset')
  const showNotesHtml =
  showNotesTemplate({ notes:
  data.notes})
  $('.content').append(showNotesHtml)
  $('#authNotification').text('note created successfully')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const createNoteFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('note creation failed')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const deleteNoteSuccess = () => {
  $('form').trigger('reset')
  $('#delete-note').hide()
  $('#authNotification').text('note deleted successfully')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const deleteNoteFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('note deletion failed')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}

const updateNoteSuccess = () => {
  $('form').trigger('reset')
  $('#update-note').hide()
  $('#authNotification').text('note updated successfully')
  setTimeout(function () {
    $('#authNotification').text('')
  }, 2000)
}
const updateNoteFailure = () => {
  $('form').trigger('reset')
  $('#authNotification').text('update note failed')
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
  signOutFailure,
  showNotesSuccess,
  createNoteSuccess,
  showNotesFailure,
  createNoteFailure,
  deleteNoteSuccess,
  deleteNoteFailure,
  updateNoteSuccess,
  updateNoteFailure
}
