'use strict'

const onCreateSuccess = function (response) {
    $('#body-message').text('Venue created! Rock on!')
    
    const venue = response.venue

    // console.log(response.venue)

    const venueHTML = (`
      <div>
        <h1>Name: ${venue.name}</h1>
        <p>Location: ${venue.location}</p>
        <p>Event: ${venue.event}</p>
        <p>ID: ${venue._id}</p>
      </div>
    `)

    $('#venue-body').html(venueHTML)
    $('#venue-body').show()
    $('#create-venue-form').hide()
    $('form').trigger('reset')
}

const onIndexSuccess = function (response) {
    $('#body-message').text('Adventure time! (Please don\'t sue.)')

    const venues = response.venues

    let venuesHTML = ''

    venues.forEach(function (currentVenue) {
        const currentVenueHTML = (`
        <div>
          <h1>Name: ${currentVenue.name}</h1>
          <p>Location: ${currentVenue.location}</p>
          <p>Event: ${currentVenue.event}</p>
          <p>ID: ${currentVenue._id}</p>
        </div>
      `)

      venuesHTML += currentVenueHTML
    })

    $('#venue-body').html(venuesHTML)
    $('#venue-body').show()
    $('.forms').hide()
}

const onShowSuccess = function (response) {
  $('#body-message').text('Here it is!')

  const venue = response.venue
    
    // console.log(venue)


    // console.log(venue)
    // console.log(venue.name)

  const venueHTML = (`
    <div>
      <h1>Name: ${venue.name}</h1>
      <p>Location: ${venue.location}</p>
      <p>Event: ${venue.event}</p>
      <p>ID: ${venue._id}</p>
    </div>
  `)

  $('#venue-body').html(venueHTML)
  $('#venue-body').show()
  $('#show-venue-form').hide()
  $('form').trigger('reset')
}

const onDestroySuccess = function () {
  $('#body-message').text('Deleted! Sounds regrettable!')

  $('#destroy-venue-form').hide()
  $('form').trigger('reset')
}

const onUpdateSuccess = function (response) {
  $('#body-message').text('Updated! Most excellent!')

  const venue = response

  console.log(venue)
  
  // const venueHTML = (`
  //   <div>
  //     <h1>Name: ${venue.name}</h1>
  //     <p>Location: ${venue.location}</p>
  //     <p>Event: ${venue.event}</p>
  //     <p>ID: ${venue._id}</p>
  //   </div>
  // `)

  // $('#venue-body').html(venueHTML)
  // $('#venue-body').show()
  $('#update-venue-form').hide()
  $('form').trigger('reset')
}

const onError = function (error) {
  $('#body-message').text('Yikes! ' + error.responseJSON.message)
}

module.exports = {
    onCreateSuccess,
    onIndexSuccess,
    onShowSuccess,
    onDestroySuccess,
    onUpdateSuccess,
    onError
}