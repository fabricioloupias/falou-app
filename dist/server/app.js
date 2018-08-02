var express = require('express');
var cors = require('cors')
var app = express();


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
app.use(cors({origin: ''}))

//Routes
app.use('/', require('./routes/api-spotify.route'));  

//Start server
app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(hostname, () => {
    console.log(`Server running`);
  });