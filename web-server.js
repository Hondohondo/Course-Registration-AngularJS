var express = require('express');
var path = require('path');
var app = express();
// var rootPath = path.normalize(__dirname + '/../');

// app.use(express.static(rootPath + '/appcopy'));

// var rootPath = path.normalize(__dirname + '/../');
// app.use(express.static(rootPath + '/app'));
// app.use(express.static('public'));

// app.use(express.static(rootPath));

// app.use(express.static(__dirname + 'app'));

// app.use(express.static('app')); //this works...need to have an app folder

app.use(express.static('app'));

// app.use(express.static('../'));

//app.use('/public', express.static('app')); //http://localhost:8000/public/img/app1.jpg //works

app.listen(3000);
console.log ('Listening on port 3000...Everything is okay');