# GEO-DOODS Client

GEO-DOODS (not about Pokemon), is a full-stack app that allows users to share which venues they've been to and for which event. A user must be signed-up first to be able to sign-in, upon sign-in they'll be able to access the sidebar which will allow them to create/submit venues, view all their venues, grab a single venue (by its Mongoose-generated ID), update a venue and delete a venue for the events that they've been to!

### Relevant links

- [Deployed Client](https://chrisjaechun.github.io/geo-doods-client/)
- [Deployed API](https://mysterious-wave-10863.herokuapp.com/)
- [GEO-DOODS API Repository](https://github.com/chrisjaechun/geo-doods-api)

### List of technologies Used

- Git Bash
- HTML5
- CSS -- Bootstrap
- JavaScript
- jQuery -- AJAX

### User Stories

- As a user, I would like to be able to submit venues I've been to.
- As a user, I would like to be able to view which venues I've been to.
- As a user, I would like to be the only one to edit my venues.
- As a user, I would like to delete certain venues.

### Wireframe

![Venue Database Wireframe](https://i.imgur.com/Pbi1bcD.png)

### Planning

1/7

After building out my API, I decided to tackle my HTML to test out my authorization CRUD actions. I also figured to create a landing page because they're neat!

After adding the respective HTML, event listeners & handlers and finally the respective API calls, I made sure they worked before I added on more CSS.

I utlimately decided to go with more earthy tones in a dark green for my background and light orange for my buttons.

1/8

This day was mostly spent on design choices and figuring out how to get a sidebar in my HTML.

I had a tough time with this as I couldn't find any documentation for Bootstrap v4 but was ultimately able to figure this out via [Bootstrapious](https://bootstrapious.com/p/bootstrap-sidebar) - thanks Bootstrapious!

1/9

Unrelated but finalized my crown! Officially an adult, I guess.

1/10

Dedicated most of my day towards making sure my Venue resource CRUD actions worked as intended. There was an issue with my index route where it showed every created venue, regardless of the token. I was able to touch base with a colleague to correct this - it looks like I forgot to declare `req.user._id` within the route's code block.

1/11

After completing the functionality of this database, I made some minor tweaks to make it look as pretty as I could.

### Unfinished

At a certain point, I would like users to be able to provide reviews for the venues they've been to.