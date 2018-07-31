var express = require('express');
var cors = require('cors')
var app = express();
const router = express.Router();


app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cors({origin: 'http://localhost:4200'}))

var SpotifyWebApi = require('spotify-web-api-node'); //https://github.com/thelinmichael/spotify-web-api-node
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
      
      //Obtener Artist
      spotifyApi.getArtist('7hwFi2wDkXLJxWeONnVoWA')
        .then(function(data) {
          const artistData = data.body;
          app.get('/spotify/artist', (req, res) => {
            res.json(artistData);
          });
      }, function(err) {
          console.error(err);
      });

      //Obtener albums
      spotifyApi.getArtistAlbums('7hwFi2wDkXLJxWeONnVoWA').then(
        function(data) {
          // console.log('Artist albums', data.body);
          const artistAlbum = data.body;
          app.get('/spotify/albums', (req, res) => {
            res.json(artistAlbum);
          });
        },
        function(err) {
          console.error(err);
        }        
      )   
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  );





app.get('/', function(req, res){
    res.send('hello world');
  });

  
app.listen(3000);