/*
    The main entry point for the client side of the app
 */

// Create the main app object
this.App = {};

// Create the needed collections on the client side
this.Colors = new Meteor.Collection("colors");
this.Cars = new Meteor.Collection("cars");

// Subscribe to the publishes in server/collections
Meteor.subscribe("colors");
Meteor.subscribe("cars");

// Method to get the current user's email that won't ever throw an undefined error!
Meteor.users.getActiveEmail = function() {
  var email;
  email = "";
  if (Meteor.userId() && Meteor.user() && Meteor.user().emails && Meteor.user().emails[0] && Meteor.user().emails[0].address) {
    email = Meteor.user().emails[0].address;
  }
  return email;
};

// Start the app
Meteor.startup(function() {
  $(function() {
    App.routes = new Routes();
  });
});
