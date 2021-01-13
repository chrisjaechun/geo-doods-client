const store = require('./../store.js')

const signUpSuccess = function() {
    $('#auth-message').text('One of us. One of us.')
    $('form').trigger('reset')
    $('#sign-up-form').hide()
}

const signUpFailure = function(error) {
    $('#auth-message').text('Yikes! ' + error.responseJSON.message)
    $('form').trigger('reset')
    
}

const signInSuccess = function(response) {
    $('form').trigger('reset')
    store.user = response.user
    $('.auth-form').hide()
    $('#auth-message').hide()
    $('#body-message').show()
    $('#body-message').text(`Hey ${store.user.username} - you're a rockstar`)
    $('.database-sidebar').show()
}

const signInFailure = function(error) {
    $('#auth-message').text('Yikes! ' + error.responseJSON.message)
    $('form').trigger('reset')
}

const changePasswordSuccess = function() { 
    $('#body-message').text('Nice new password!')
    $('#change-password-form').hide()
    $('form').trigger('reset')
}

const changePasswordFailure = function(error) {
    $('#body-message').text('Yikes! ' + error.responseJSON.message)
    $('form').trigger('reset')
}

const signOutSuccess = function() {
    store.user = null
    $('.landing-page').show()
    $('.database-sidebar').hide()
    $('.forms').hide()
    $('#body-message').hide()
    $('#venue-body').hide()
}

const onError = function (error) {
    $('#body-message').text('Yikes! ' + error.responseJSON.message)
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    onError
}