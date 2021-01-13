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
  $('.forms').hide()
  // show forms on click from sidebar
  $('#change-password').on('click', authEvents.onChangePasswordSidebar)
  $('#create').on('click', venueEvents.onCreateSidebar)
  $('#show').on('click', venueEvents.onShowSidebar)
  $('#destroy').on('click', venueEvents.onDestroySidebar)
  $('#update').on('click', venueEvents.onUpdateSidebar)
  // Authorization event listeners
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  // Venue-resource event listeners
  $('#create-venue-form').on('submit', venueEvents.onCreateVenue)
  $('#index').on('click', venueEvents.onIndexVenues)
  $('#show-venue-form').on('submit', venueEvents.onShowVenue)
  $('#destroy-venue-form').on('submit', venueEvents.onDestroyVenue)
  $('#update-venue-form').on('submit', venueEvents.onUpdateVenue)
  // show auth-form on 'Get Started' click
  $('.get-started-btn').on('click', authEvents.getStarted)
})
