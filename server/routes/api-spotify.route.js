const express = require('express');
const router = express.Router();


var SpotifyWebApi = require('spotify-web-api-node');
var clientId = 'b0909f7964c04dfb9631c5da40d52cd8',
  clientSecret = 'a262a3248a8844af8e8e3431042a93ab';

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
  });
   
  // Retrieve an access token.
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
   
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);

     
  
      spotifyApi.getArtistAlbums('7hwFi2wDkXLJxWeONnVoWA').then(
          function(data) {
          console.log('Artist albums', data.body);
          return data
          },
          function(err) {
          console.error(err);
          }
      );
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  );
  

