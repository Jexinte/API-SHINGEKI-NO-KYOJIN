const express = require('express')
const router = express.Router()
const cors = require('cors')
const AffichePController = require('../controllers/personnages')
router.use(express.json())
router.use(cors())


 router.get('/', AffichePController.AfficheLesPersonnages)

module.exports = router