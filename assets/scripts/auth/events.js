const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')

const getStarted = function () {
    $('.landing-page').hide()
    $('.auth-form').show()
    $('#sign-up-form').show()
    $('#auth-message').show()
    $('#auth-message').text('Sign-In or Sign-Up to join!')
  }

const onSignUp = function (event) {
  event.preventDefault()
  
  const data = getFormFields(event.target)
  
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  }
  
const onSignIn = function (event) {
  event.preventDefault()
  
  const data = getFormFields(event.target)
  
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  }

const onSignOut = function () {
    api.signOut()
      .then(ui.signOutSuccess)
      .catch(ui.onError)
  }

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onChangePasswordSidebar = function () {
  $('.forms').hide()
  $('#change-password-form').show()
  $('#body-message').text('Need a new password?')
  $('#venue-body').hide()
}

module.exports = {
    getStarted,
    onSignUp,
    onSignIn,
    onSignOut,
    onChangePassword,
    onChangePasswordSidebar,
}