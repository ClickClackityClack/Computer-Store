var express = require('express');
var conn = require('../dbconnect/db')
var router = express.Router();

router.get('/', function(req, res, next) {
    let cmd = 'SELECT * FROM categories';
    conn.query(cmd, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
  });

  router.delete('/:id' , function(req,res){
    let cmd = 'DELETE FROM categories WHERE category_id = ?'
    console.log(req.body)
    let id = req.params.id
    conn.query(cmd, id, (err, result) => {
      if (err) throw err;
      res.end();
    });
  })

  router.put('/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    let cmd = 'UPDATE categories SET ? WHERE category_id = ?';
    conn.query(cmd, [form, id], (err, result) => {
      if (err) throw err;
      res.end();
    });
  });

router.post('/', function(req,res){
    let form = req.body;
    let cmd = 'INSERT INTO categories SET ?';
    conn.query(cmd, form, (err, result) => {
        if (err) throw err;
        res.end();
    });
  })

module.exports = router;
