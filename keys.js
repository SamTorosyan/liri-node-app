
console.log('this is loaded');

// exports.twitter = {
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// };

// exports.spotify = {
//   id: process.env.SPOTIFY_ID,
//   secret: process.env.SPOTIFY_SECRET
// };

//   var spotify = new Spotify(keys.spotify);

  var tweet = new Twitter(keys.twitter);

  var tweet = new Twitter({
    consumer_key: apiKeys.twitterKeys.consumer_key,
    consumer_secret: apiKeys.twitterKeys.consumer_secret,
    access_token_key: apiKeys.twitterKeys.access_token_key,
    access_token_secret: apiKeys.twitterKeys.access_token_secret
  });
  
  var listTweet = {
      screen_name: SamvelTorosyan,
      count: 3
  };