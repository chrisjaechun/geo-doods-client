const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')

const getStarted = function () {
    $('.landing-page').hide()
    $('.auth-form').show()
    $('#auth-message').show()
    $('#auth-message').text('Sign-In or Sign-Up to join!')
  }

const onSignUp = function (event) {
  event.preventDefault()
  
  const data = getFormFields(event.target)

  console.log(data)
  
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
      .catch(next)
  }

const onChangePassword = function (event) {
    event.preventDefault()

    const data = getFormFields(event.target)

    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
}

const onChangePasswordSidebar = function () {
    $('#change-password-form').show()
}
module.exports = {
    getStarted,
    onSignUp,
    onSignIn,
    onSignOut,
    onChangePassword,
    onChangePasswordSidebar
}