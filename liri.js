require("dotenv").config();


var myTwitter = 'SamvelTorosyan';

var fs = require('fs'); 
var twitter = require('twitter');
var request = require('request'); 
// var spotify = require('spotify'); 


var apiKeys = require('./keys.js');

var client = new Twitter({
    consumer_key: apiKeys.twitterKeys.consumer_key,
    consumer_secret: apiKeys.twitterKeys.consumer_secret,
    access_token_key: apiKeys.twitterKeys.access_token_key,
    access_token_secret: apiKeys.twitterKeys.access_token_secret
  });
  
  var myInfo = {
      screen_name: SamvelTorosyan,
      count: 20
  };

  var commandType = process.argv[2];



  var commandString = "";
  for(var i = 3; i < process.argv.length; i++){
    commandString += process.argv[i] + " ";
  }
 
  var connect = "liri.js ";


for(var i = 2; i < process.argv.length; i++){
  connect += process.argv[i] + " ";
}
connect = connect.substring(0, connect.length); 

fs.appendFile("log.txt", connect + '\n', function(err) {
  
  if(err){
    console.log(err);
  }


});


// var nodeArgs = process.argv;

// var twitterTweets = "";

// for (var i = 2; i < nodeArgs.length; i++) {

//     twitterTweets = twitterTweets + " " + nodeArgs[i];
//   }
  
//   console.log(twitterTweets);
  
//   twitter.request(twitterTweets, function(err, data) {
  
//   console.log(JSON.stringify(data, null, 2));
// });


switch(commandType){

    
    case 'my-tweets':
      callTwitter();
      break;
      default:

      var userPrompt = 'Please pass in a valid LIRI command type...' + '\n' + 'Ex: "my-tweets", "spotify-this-song", "movie-this", or "do-what-it-says"';
      
      console.log(userPrompt);
  
      
      fs.appendFile("log.txt", userPrompt, + function(err) {
        if(err){
          console.log(err);
        }
    });



}