const express = require('express')
const router = express.Router()
const multer = require('../middleware/multer-config')
const UsersControllers = require('../controllers/user')
router.use(express.json())
router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

 router.post('/login',multer,UsersControllers.connexionUtilisateur)
 router.post('/creationutilisateur',multer,UsersControllers.createUser)
module.exports = router