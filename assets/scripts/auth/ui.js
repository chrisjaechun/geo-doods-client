const store = require('./../store.js')

const signUpSuccess = function() {
    $('#auth-message').text('One of us. One of us.')
    $('form').trigger('reset')
    $('#sign-up-form').hide()
}

const signUpFailure = function(error) {
    $('#auth-message').text('Yikes.')
}

const signInSuccess = function(response) {
    $('form').trigger('reset')
    store.user = response.user
    $('.auth-form').hide()
    $('#auth-message').hide()
    $('.database-sidebar').show()
    $('#body-message').text(`Hey ${store.user.username} - you're an all-star`)
}

const signInFailure = function() {
    $('#auth-message').text('Ruh-roh - something went wrong')
}

const changePasswordSuccess = function() { 
    $('#body-message').text('Really? That\'s your new password? Okay')
    $('#change-password-form').hide()
    $('form').trigger('reset')
}

const changePasswordFailure = function() {
    $('#auth-message').text('Something is not right.')
    // $('form').trigger('reset')
}

const signOutSuccess = function() {
    $('.database-sidebar').hide()
    $('#body-message').hide()
    $('.landing-page').show()
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
}