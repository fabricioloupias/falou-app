var express = require('express');
var cors = require('cors')
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

//var uri_origin = 'http://localhost:4200'
var uri_origin = ''
app.use(cors({origin: uri_origin}))

//Routes
app.use('/', require('./server/routes/api-spotify.route'));  
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/dist/falou-app'))
}


//Start server
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname,'/dist/falou-app','index.html')); 
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running`);
});