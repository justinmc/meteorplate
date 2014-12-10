###
    View logic for the header component
###

Meteor.startup () ->

    Template.componentHeader.helpers
        loggedIn: ->
          return Meteor.userId()?
        name: ->
            # Get parameters for the user if logged in
            if Meteor.userId()? && Meteor.user()? && Meteor.user().profile?
                return Meteor.user().profile.name
            else
                return ''
