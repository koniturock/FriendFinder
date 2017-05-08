var friends = require('../data/friends.js');
var path = require('path');



module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});



	app.post('/api/friends', function(req, res){

		var greatMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		console.log(req.body);
		
		var userData 	= req.body;
		var userName 	= userData.name;
		var userImage 	= userData.image;
		var userScores 	= userData.scores;

		var totalDifference = 0;

		
		for(var i = 0; i < [friends].length-1; i++){
			console.log(friends[i].name);
			totalDifference = 0;

			
			for(var j = 0; j < 10; j++){
				
				totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friends[i].scores[j]));
			
				if (totalDifference <= greatMatch.friendDifference){

					
					greatMatch.name = friends[i].name;
					greatMatch.photo = friends[i].photo;
					greatMatch.matchDifference = totalDifference;
				}
			}
		}

		friends.push(userData);
 
		res.json(greatMatch);
	});
};