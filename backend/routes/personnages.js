const express = require('express')
const router = express.Router()
const cors = require('cors')
const multer = require('../middleware/multer-config')
const AffichePController = require('../controllers/personnages')
const CreationPController = require('../controllers/creationDePersonnage.js')
const CreationUController = require('../controllers/creationUtilisateur')
const LoginController = require('../controllers/login')
router.use(express.json())
router.use(cors())


 router.get('/', AffichePController.AfficheLesPersonnages)
 router.post('/',multer, CreationPController.creationPersonnage)
 router.post('/creationutilisateur',multer,CreationUController.createUser)
 router.post('/login',multer,LoginController.connexionUtilisateur)
module.exports = router