const express = require('express')
const router = express.Router()
 const cors = require('cors')
const multer = require('../middleware/multer-config')
const PersonnagesControllers = require('../controllers/personnages')
const auth = require('../middleware/auth')
router.use(express.json())
router.use(cors())




 router.get('/',auth,PersonnagesControllers.AfficheLesPersonnages)
 router.get('/:id',auth,PersonnagesControllers.AfficheLesPersonnagesParId)

 router.post('/',auth,multer,PersonnagesControllers.creationPersonnage)

module.exports = router