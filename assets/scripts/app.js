'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const venueEvents = require('./venue/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // hide auth-form
  $('.auth-form').hide()
  $('#auth-message').hide()
  // hide sidebar and forms
  $('.database-sidebar').hide()
  $('#change-password-form').hide()
  // show change-password-form from sidebar
  $('#change-password').on('click', authEvents.onChangePasswordSidebar)
  // show auth-form on 'Get Started' click
  $('.get-started-btn').on('click', authEvents.getStarted)
  // Authorization event listeners
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
})
