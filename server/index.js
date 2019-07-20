// main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const router = require('./router');
const mongoose = require('mongoose');

const cors = require('cors');

//DB setup
// mongoose.connect('mongod://localhost:auth/auth');
mongoose.connect("mongodb://localhost/auth", { useNewUrlParser: true });
 
const connection = mongoose.connection;
 
connection.on("connected", function() {
  console.log("connected to db");
});



// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app);



// Server Setup

const port = process.env.PORT || 3001;
const server = http.createServer(app);

server.listen(port);
console.log('Server Listening on, ',port);