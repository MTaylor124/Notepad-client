'use strict'

const config = require('./../config')
const store = require('./../store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    data: formData,
    method: 'POST'
  })
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    data: formData,
    method: 'POST'
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    data: formData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createNote = formData => {
  return $.ajax({
    url: config.apiUrl + '/notes',
    data: {
      'note': formData
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'POST'
  })
}

const showNotes = () => {
  return $.ajax({
    url: config.apiUrl + '/notes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteNote = formData => {
  return $.ajax({
    url: config.apiUrl + '/notes/' + formData.note_id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateNote = formData => {
  return $.ajax({
    url: config.apiUrl + '/notes/' + formData.note_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'note': formData
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createNote,
  showNotes,
  deleteNote,
  updateNote
}
