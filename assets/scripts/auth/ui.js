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
    $('#welcome-message').show()
}

const signInFailure = function() {
    $('#auth-message').text('Wrong something.')
}

const changePasswordSuccess = function() {
    $('#auth-message').text('Changed!')
    $('form').trigger('reset')
}

const changePasswordFailure = function() {
    $('#auth-message').text('Something is not right.')
    // $('form').trigger('reset')
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure
}