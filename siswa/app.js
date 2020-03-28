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

app.get('/home',(req, res) => {
  let sql = "SELECT * FROM ppdb";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('home_view',{
      results: results
    });
  });
});


app.get('/table',(req, res) => {
  let sql = "SELECT * FROM ppdb";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('table_view',{
      results: results
    });
  });
});

app.get('/',(req, res) => {
    let sql = "SELECT * FROM ppdb";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('pendaftar_view',{
        results: results
      });
    });
  });
   
  //route for insert data
  app.post('/save',(req, res) => {
    let data = {jenis_pendaftaran: req.body.jenis_pendaftaran, jalur_pendaftaran: req.body.jalur_pendaftaran, pilih_kejuruan: req.body.pilih_kejuruan, tk: req.body.tk, paud: req.body.paud, no_un: req.body.no_un, skhun: req.body.skhun, ijazah: req.body.ijazah, hobi: req.body.hobi, cita: req.body.cita, nm: req.body.nm, gender: req.body.gender, nisn: req.body.nisn, nik: req.body.nik, tempat_lahir: req.body.tempat_lahir, tgl: req.body.tgl, agama: req.body.agama, kebutuhan_khusus: req.body.kebutuhan_khusus, alamat: req.body.alamat, rt: req.body.rt, rw: req.body.rw, dusun: req.body.dusun, kel: req.body.kel, kec: req.body.kec, kota: req.body.kota, pos: req.body.pos, tempat_tinggal: req.body.tempat_tinggal, tranportasi: req.body.tranportasi, no_hp: req.body.no_hp, sktm: req.body.sktm, kks: req.body.kks, kps: req.body.kps, kip: req.body.kip, kis: req.body.kis, kewarganegaraan: req.body.kewarganegaraan, nm_bpk: req.body.nm_bpk, thn_lahir_bpk: req.body.thn_lahir_bpk, pendidikan_bpk: req.body.pendidikan_bpk, pekerjaan_bpk: req.body.pekerjaan_bpk, penghasilan_bln_bpk: req.body.penghasilan_bln_bpk, kebutuhan_khusus_bpk: req.body.kebutuhan_khusus_bpk, nm_ibu: req.body.nm_ibu, thn_lahir_ibu: req.body.thn_lahir_ibu, pendidikan_ibu: req.body.pendidikan_ibu, pekerjaan_ibu: req.body.pekerjaan_ibu, penghasilan_bln_ibu: req.body.penghasilan_bln_ibu, kebutuhan_khusu_ibu: req.body.kebutuhan_khusu_ibu, nm_wali: req.body.nm_wali, thn_lahir_wali: req.body.thn_lahir_wali, pendidikan_wali: req.body.pendidikan_wali, pekerjaan_wali: req.body.pekerjaan_wali, penghasilan_bln_wali: req.body.penghasilan_bln_wali, tinggi_bdn: req.body.tinggi_bdn, berat_bdn: req.body.berat_bdn, jrk_rmh: req.body.jrk_rmh, tempuh_sekolah: req.body.tempuh_sekolah, jml_sdr: req.body.jml_sdr};
    let sql = "INSERT INTO ppdb SET ?";
    let query = conn.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
  });
//server listening
app.listen(5000, () => {
  console.log('Server is running at port 5000');
});