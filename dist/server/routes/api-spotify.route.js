const express = require('express');
const router = express.Router();
var SpotifyWebApi = require('spotify-web-api-node');

var SpotifyWebApi = require('spotify-web-api-node'); //npm install spotify-web-api-node --save
var clientId = 'b0909f7964c04dfb9631c5da40d52cd8',
  clientSecret = 'a262a3248a8844af8e8e3431042a93ab';

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function (data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);   
  },
  function (err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);

// Get an artist
router.get('/api/spotify/artist', (req, res) => {
  spotifyApi.getArtist('7hwFi2wDkXLJxWeONnVoWA')
  .then(function(data) {
    res.json(data.body)
  }, function(err) {
    console.error(err);
  });
})

// Get an albums
router.get('/api/spotify/albums', (req, res) => {
  spotifyApi.getArtistAlbums('7hwFi2wDkXLJxWeONnVoWA').then(
    function (data) {
      res.json(data.body)
    },
    function (err) {
      console.error(err);
    }
  )   
})






module.exports = router;