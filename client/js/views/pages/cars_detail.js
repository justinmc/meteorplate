/*
    View logic for the Cars detail page
 */

Meteor.startup(function() {

  Template.carsDetail.created = function() {
    Session.set('carsDetailDescription', '');
  };

  var getId = function() {
    var templateData;
    templateData = Session.get('templateData');
    if (templateData) {
      return templateData.id;
    } else {
      return '';
    }
  };

  Template.carsDetail.events = {
    'submit .form-description': function(event, template) {
      var description;
      event.preventDefault();
      description = Session.get('carsDetailDescription');
      Cars.update({
        _id: getId()
      }, {
        $set: {
          description: description
        }
      });
    },
    'input .description': function(event, template) {
      Session.set('carsDetailDescription', event.target.value);
    }
  };

  Template.carsDetail.helpers({
    car: function() {
      return Cars.findOne({
        _id: getId()
      });
    },
    descriptionPending: function() {
      return Session.get('carsDetailDescription');
    }
  });
});
