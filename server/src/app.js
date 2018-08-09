const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//execute the express module
const app = express();

// use the middleware for the app
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

// use bodyParser middleware to parse the data from server and client
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// the data to send to the client
var titles = [{
  title: "welcome to the server side",
  description: "the nodeJS with VueJS is fun"
  },
  {
    title: "The new technology",
    description: "With a good understanding of VueJS I must learn new Technology"
  }
];

// fetch the data from server to the client
app.get('/post',(req , res) => {
  res.send(titles);
});

// send data from the client and store it to titles array
app.post('/post',urlencodedParser,function(req,res){
  titles.push(req.body);
  res.json(titles);
});

//listen to the port
app.listen(process.env.PORT || 8081);
