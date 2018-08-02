var express = require('express');
var cors = require('cors')
var http = require('http');
var app = express();
var path = require('path');


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cors({origin: 'https://still-gorge-51725.herokuapp.com/'}))

//Routes
app.use('/', require('./routes/api-spotify.route'));  
app.use(express.static(__dirname + '/dist/falou-app'))

//Start server
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname));
});

const server = http.createServer(app)

app.listen(process.env.PORT, () => {
    console.log(`Server running`);
  });