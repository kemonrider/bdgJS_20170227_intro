/*--------------------*/
/* variables */
const appPort = 8080;

/*--------------------*/
/* require */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan')
var path = require('path');

/*--------------------*/
/* express */
app.use(bodyParser.json());
app.use(express.static('assets'))
app.use(morgan('combined'))

/*--------------------*/
/* routes */
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/test', function(req, res){
  res.send('SUCCESS GET VALUE');
})

app.post('/test', function(req, res){
  console.log(req.body);
  let returnValue = 'SUCCESS! : ' + JSON.stringify(req.body);
  res.send(returnValue);
});

/*--------------------*/
/* start app */
app.listen(appPort, function(){
  console.log('App running on port : ' + appPort);
});