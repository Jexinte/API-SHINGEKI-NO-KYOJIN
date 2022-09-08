const express = require('express')
const router = express.Router()
const multer = require('../middleware/multer-config')
const UsersControllers = require('../controllers/user')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = {
 credentials:true,
 origin:true,
 exposedHeders:["Set-cookie"]
}
const MySQLStore = require('express-mysql-session')(session);
const options = {
  host : `${process.env.HOST}`,
  port : `${process.env.PORT}`,
  user: `${process.env.NAME_USER}`,
  password:``,
  database:`${process.env.NAME_DB}`,
  createDatabaseTable:false,
  connectionLimit:1
}

let sessionStore = new MySQLStore(options)

router.use(express.json())
router.use(cors(corsOptions))
router.use(cookieParser())
router.options('*',cors(corsOptions))
router.use(session({
  key:'test',
  secret:"y14z$n9TxDG#j*u%SSeud$dXjSxI3",
  store:sessionStore,
  saveUninitialized:false,
  resave:false
}))



 router.post('/connexion',multer,UsersControllers.connexionUtilisateur)
 router.post('/inscription',multer,UsersControllers.createUser)
 router.post('/deconnexion',UsersControllers.deconnexion)
module.exports = router