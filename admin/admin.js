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

app.get('/',(req, res) => {
  let sql = "SELECT * FROM ppdb";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('admin_view',{
      results: results
    });
  });
});

  //route for insert data
  app.post('/save',(req, res) => {
    let data = {pernyataan: req.body.pernyataan};
    let sql = "INSERT INTO ppdb SET ?";
    let query = conn.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
  });

//route for update data
app.post('/update',(req, res) => {
    let sql = "UPDATE ppdb SET pernyataan='"+req.body.pernyataan+"' WHERE id="+req.body.id;
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
  });
   
//server listening
app.listen(7070, () => {
  console.log('Server is running at port 7070');
});