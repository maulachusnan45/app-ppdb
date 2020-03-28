//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();
 
//Create connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ppdb'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set public folder as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));
app.use(express.static('views'))

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/register.html'));
});   

  //route for insert data
  app.post('/save',(req, res) => {
    let data = {username: req.body.username, password: req.body.password, email: req.body.email};
    let sql = "INSERT INTO accounts SET ?";
    let query = conn.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('http://localhost:8080/');
    });
  });
//server listening
app.listen(2000, () => {
  console.log('Server is running at port 2000');
});