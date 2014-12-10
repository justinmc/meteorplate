/*
 * View logic for the Account page
 */

Meteor.startup(function() {

  Session.setDefault('accountName', '');

  Template.account.events({
    'submit .form-name': function(event, template) {
      event.preventDefault();
      var name = Session.get('accountName');

      Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $set: {
          profile: {
            name: name
          }
        }
      });
    },
    'input .name': function(event, template) {
      Session.set('accountName', event.target.value);
    }
  });

  Template.account.helpers({
    userId: Meteor.userId,
    email: Meteor.users.getActiveEmail,

    namePending: function() {
      return Session.get('accountName');
    },

    name: function() {
      if ((Meteor.user() != null) && (Meteor.user().profile != null)) {
        return Meteor.user().profile.name;
      }
    }
  });
});
