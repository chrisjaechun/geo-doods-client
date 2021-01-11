const config = require('./../config')
const store = require('./../store.js')

const createVenue = function (data) {
    return $.ajax({
        url: config.apiUrl + '/venues',
        method: 'POST',
        data,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const indexVenues = function () {
    return $.ajax({
        url: config.apiUrl + '/venues',
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const showVenue = function (data) {
    // console.log(data)
    return $.ajax({
        url: config.apiUrl + '/venues/' + data.venue.id,
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const destroyVenue = function (data) {
    return $.ajax({
        url: config.apiUrl + '/venues/' + data.venue.id,
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const updateVenue = function (data) {

    // console.log(data)
    return $.ajax({
        url: config.apiUrl + '/venues/' + data.venue.id,
        method: 'PATCH',
        data,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

module.exports = {
    createVenue,
    indexVenues,
    showVenue,
    destroyVenue,
    updateVenue
}