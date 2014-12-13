/*
 * Cars Collection View
 */

Meteor.startup(function() {

  Template.collectionCars.helpers({
      cars: function() {
        return Cars.find({}, {sort: {coolness: -1}});
      }
  });
});
