Continents = new Mongo.Collection("continents");
if (Meteor.isClient) {
	var cont = [
 		{name: "Asia"},
 		{name: "Europe"},
 		{name: "North America"}
	];

	for (var i = 0; i < cont.length; i++) {
 		Continents.insert(cont[i]);
	}

	Template.tips.helpers({
    continents: function () {
      return Continents.find({});
    }
	});

}