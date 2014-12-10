/*
 * The main server file, general server side code should go here
 */

// Set permissions on the users collection
Meteor.users.allow({

  // A user can update their own record
  update: function(userId, doc) {
    return userId == this.userId
  }
});
