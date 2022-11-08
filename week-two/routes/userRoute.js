'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');

const upload = multer({dest:  'uploads/'});

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUser);

    router.post('/', upload.single('user'), userController.createUser);
  
  router.put('/', (req, res) => {
    res.send('From this endpoint you can put users.');
  });
  router.delete('/', (req, res) => {
    res.send('From this endpoint you can delete users.');
  });
  
module.exports = router;