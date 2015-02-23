Router.configure({
  layoutTemplate: 'layout'
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }
  }
});

Router.map(function() {
  this.route('findbuddy', {path: '/'});
  this.route('tips');
  this.route('friends');
  this.route('profiles');
  // given a url like "/profiles/5"
  // this.route('/profiles/:_id', function () {
  // var params = this.params; // { _id: "5" }
  // var id = params._id; // "5"
  // });
});

