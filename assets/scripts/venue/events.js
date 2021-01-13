const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateVenue = function (event) {
    event.preventDefault()

    const data = getFormFields(event.target)

    api.createVenue(data)
      .then(ui.onCreateSuccess)
      .catch(ui.onError)
}

const onCreateSidebar = function() {
    $('.forms').hide()
    $('#create-venue-form').show()
    $('#body-message').text('Share an adventure!')
    $('#venue-body').hide()
}

const onIndexVenues = function () {
    api.indexVenues()
      .then(ui.onIndexSuccess)
      .catch(ui.onError)
}

const onShowVenue = function (event) {
    event.preventDefault()

    const data = getFormFields(event.target)

    api.showVenue(data)
      .then(ui.onShowSuccess)
      .catch(ui.onError)
}

const onShowSidebar = function() {
    $('.forms').hide()
    $('#show-venue-form').show()
    $('#body-message').text('Find a venue by its ID!')
    $('#venue-body').hide()
}

const onDestroyVenue = function (event) {
    event.preventDefault()

    const data = getFormFields(event.target)

    api.destroyVenue(data)
      .then(ui.onDestroySuccess)
      .catch(ui.onError)
}

const onDestroySidebar = function() {
    $('.forms').hide()
    $('#destroy-venue-form').show()
    $('#body-message').text('Wanna forget something?')
    $('#venue-body').hide()
}

const onUpdateVenue = function (event) {
    event.preventDefault()

    const data = getFormFields(event.target)

    api.updateVenue(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onError)
}

const onUpdateSidebar = function() {
    $('.forms').hide()
    $('#update-venue-form').show()
    $('#body-message').text('Update a venue by its ID!')
    $('#venue-body').hide()
}

module.exports = {
    onCreateVenue,
    onCreateSidebar,
    onIndexVenues,
    onShowVenue,
    onShowSidebar,
    onDestroyVenue,
    onDestroySidebar,
    onUpdateVenue,
    onUpdateSidebar
}