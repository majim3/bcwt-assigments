'use strict';
// catRoute
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('From this endpoint you can get cats.')
  });
  
  router.get('/catId',(req,res) =>{
    console.log(req.params);
    res.send('From this endpoint you can get cats with id ' + req.params.catId)
    });
  
    router.post('/',(req,res) =>{
  //console.log(req);
  res.send('From this endpoint you can add more cats')
  });
  
  router.put('/', (req, res) => {
    res.send('From this endpoint you can put users.');
  });
  router.delete('/', (req, res) => {
    res.send('From this endpoint you can delete users.');
  });
  
module.exports = router;