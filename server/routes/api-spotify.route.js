// https://github.com/thelinmichael/spotify-web-api-node
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
    //console.log('The access token expires in ' + data.body['expires_in']);
    //console.log('The access token is ' + data.body['access_token']);
    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);
  },
  function (err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);

// Get an artist
router.get('/api/spotify/artist', (req, res) => {
  spotifyApi.getArtist('7hwFi2wDkXLJxWeONnVoWA')
    .then(function (data) {
      res.json(data.body)
    }, function (err) {
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

// Get an artist's top tracks
var id_ozuna = '1i8SpTcr7yvPOmcqrbnVXY';
var id_daddy_yankee = '4VMYDCV2IEDYJArk749S6m';
var id_nicky_jam = '1SupJlEpv7RS2tPNRaHViT';
var id_jBalvin = '1vyhD5VmyZ7KMfW5gqLgo5';


router.get('/api/spotify/top-tracks-artist/' + id_ozuna, (req, res) => {
  spotifyApi.getArtistTopTracks(id_ozuna, 'GB')
    .then(function (data) {
      res.json(data.body)
    }, function (err) {
      console.log('Something went wrong!', err);
    });
})

router.get('/api/spotify/top-tracks-artist/' + id_daddy_yankee, (req, res) => {
  spotifyApi.getArtistTopTracks(id_daddy_yankee, 'GB')
    .then(function (data) {
      res.json(data.body)
    }, function (err) {
      console.log('Something went wrong!', err);
    });
})

router.get('/api/spotify/top-tracks-artist/' + id_nicky_jam, (req, res) => {
  spotifyApi.getArtistTopTracks(id_nicky_jam, 'GB')
    .then(function (data) {
      res.json(data.body)
    }, function (err) {
      console.log('Something went wrong!', err);
    });
})

router.get('/api/spotify/top-tracks-artist/' + id_jBalvin, (req, res) => {
  spotifyApi.getArtistTopTracks(id_jBalvin, 'GB')
    .then(function (data) {
      res.json(data.body)
    }, function (err) {
      console.log('Something went wrong!', err);
    });
})

// Get artists related to an artist
router.get('/api/spotify/artist-related', (req, res) => {
  spotifyApi.getArtistRelatedArtists('4VMYDCV2IEDYJArk749S6m')
    .then(function (data) {
      res.json(data.body)
    }, function (err) {
      done(err);
    });
})



module.exports = router;
