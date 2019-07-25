'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateNote = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createNote(formData)
    .then(ui.createNoteSuccess)
    .catch(ui.createNoteFailure)
}

const clearAuthpads = () => {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
}

const showSignUp = event => {
  clearAuthpads()
  $('#sign-up').show()
}

const showSignIn = event => {
  clearAuthpads()
  $('#sign-in').show()
}

const showSignOut = event => {
  clearAuthpads()
  $('#sign-out').show()
}

const showChangePassword = event => {
  clearAuthpads()
  $('#sign-out').show()
  $('#change-password').show()
}

const onShowNotes = event => {
  $('#content').text('')
  event.preventDefault()
  api.showNotes()
    .then(ui.showNotesSuccess)
    .catch(ui.showNotesFailure)
}

const onDeleteNote = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteNote(formData)
    .then(ui.deleteNoteSuccess)
    .catch(ui.deleteNoteFailure)
}

const onUpdateNote = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  if (formData.body === '') {
    delete formData.body
  }
  if (formData.title === '') {
    delete formData.title
  }
  if (formData.priority === '') {
    delete formData.priority
  }
  api.updateNote(formData)
    .then(ui.updateNoteSuccess)
    .catch(ui.updateNoteFailure)
}

const hideNoteForms = () => {
  $('#create-note').hide()
  $('#update-note').hide()
  $('#delete-note').hide()
}

const showCreateNote = () => {
  hideNoteForms()
  $('#create-note').show()
}

const showDeleteNote = () => {
  hideNoteForms()
  $('#delete-note').show()
}

const showUpdateNote = () => {
  hideNoteForms()
  $('#update-note').show()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateNote,
  showSignUp,
  showSignIn,
  showSignOut,
  showChangePassword,
  onShowNotes,
  onDeleteNote,
  onUpdateNote,
  showCreateNote,
  showDeleteNote,
  showUpdateNote
}
