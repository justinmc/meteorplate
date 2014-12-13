/*
 * View logic for the Cars page
 */

Meteor.startup(function() {

  Session.setDefault('carsMake', '');
  Session.setDefault('carsModel', '');
  Session.setDefault('carsDescription', '');
  Session.setDefault('carsCoolness', null);

  Template.cars.events = {
    'submit .form-car': function(event, template) {
      event.preventDefault();
      make = Session.get('carsMake');
      model = Session.get('carsModel');
      description = Session.get('carsDescription');
      coolness = Session.get('carsCoolness');
      Cars.insert({make: make, model: model, description: description, coolness: coolness});
    },

    'input .make': function(event, template) {
      Session.set('carsMake', event.target.value);
    },

    'input .model': function(event, template) {
      Session.set('carsModel', event.target.value);
    },

    'input .description': function(event, template) {
      Session.set('carsDescription', event.target.value);
    },

    'input .coolness': function(event, template) {
      Session.set('carsCoolness', parseInt(event.target.value));
    }
  };

  Template.cars.helpers({
    carPending: function() {
      return {
        make: Session.get('carsMake'),
        model: Session.get('carsModel'),
        description: Session.get('carsDescription'),
        coolness: Session.get('carsCoolness'),
      }
    }
  });
});
