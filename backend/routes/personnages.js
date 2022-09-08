const express = require('express')
const router = express.Router()
const cors = require('cors')
const multer = require('../middleware/multer-config')
const PersonnagesControllers = require('../controllers/personnages')
const authSession = require('../middleware/auth-session')
const corsOptions = {
  credentials:true,
  origin:true,

 }
router.use(express.json())
router.use(cors(corsOptions))



 router.get('/',authSession,PersonnagesControllers.AfficheLesPersonnages)
 router.get('/:id',authSession,PersonnagesControllers.AfficheLesPersonnagesParId)
 router.put('/:id',authSession,multer,PersonnagesControllers.ModifieUnPersonnageViaSonId)
 router.post('/',authSession,multer,PersonnagesControllers.creationPersonnage)
router.delete('/:id',authSession,multer,PersonnagesControllers.SupprimerPersonnage)
module.exports = router