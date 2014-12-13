/*
    View logic for the Colors page
 */

Meteor.startup(function() {
  Session.setDefault('colorsColor', '');

  Template.colors.events({
    'submit .form-color': function(event, template) {
      var color;
      event.preventDefault();
      color = Session.get('colorsColor');
      Colors.insert({
        name: color
      });
    },
    'input .color': function(event, template) {
      Session.set('colorsColor', event.target.value);
    }
  });

  Template.colors.helpers({
    colors: function() {
      return Colors.find().fetch().reverse();
    },
    colorPending: function() {
      return Session.get('colorsColor');
    }
  });
});
