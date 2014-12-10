/*
    The colors collection
 */

// Declare the collection
var Colors = new Meteor.Collection("colors");

// Publish the collection to the client
Meteor.publish("colors", function() {
  return Colors.find();
});

// Set permissions on this collection
Colors.deny({
  remove: function(userId, doc) {
    return false;
  },
  update: function(userId, doc) {
    return false;
  }
});
Colors.allow({
  insert: function(userId, doc) {
    return true;
  }
});

// What to do when the server first starts up
Meteor.startup(function() {
  // Fill the collection with some initial data if it's empty
  if (Colors.find().count() === 0) {
    Colors.insert({
      name: "red"
    });
    return Colors.insert({
      name: "blue"
    });
  }
});
