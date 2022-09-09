const {User} = require('../db/sequelize')
const bcrypt = require('bcrypt')
const {Session} = require('../db/sessionSequelize')
const dotenv = require('dotenv')
const {UniqueConstraintError} = require('sequelize')
dotenv.config()
let session
// const jwt = require('jsonwebtoken')




exports.createUser = (req,res) => {
  bcrypt.hash(req.body.motdepasse,10).then(hash =>{

session = req.session
session.utilisateur = req.body.utilisateur


User.create({
  utilisateur : req.body.utilisateur,
  motdepasse : hash
})

.then(user => res.status(201).json({utilisateur:user.utilisateur,idSession:session.id,data:session}))

    .catch(error => {
      if(error instanceof UniqueConstraintError)
        return res.status(400).json({message:error.message})
    })
  })

  .catch(() => {
    return res.status(500).json({message:`Veuillez réessayez dans quelques instants !`})
  })
}


exports.connexionUtilisateur = (req,res) => {

//* Récupération de l'identifiant de la session en cours

session.id = req.session.id

  User.findOne({where : {utilisateur:req.body.utilisateur}})
  .then(user => 
    {
      
      if(!user)
      return res.status(400).json({message:`Cet utilisateur n'existe pas !`})
      
      bcrypt.compare(req.body.motdepasse,user.motdepasse)
  .then(motdepasse => {
  

        session.utilisateur = user.utilisateur
        //! Si le mot de passe n'est pas le bon !
        if(!motdepasse){
          
          return res.status(403).json({message:`Le mot de passe est incorrect`})
        }
      
        if(session.id && session.utilisateur){
              return res.status(200).json({utilisateur:session.utilisateur,sessionId:session.id})
        }
        
    // //* Sinon on crée un token pour l'utilisateur 
    
    //      res.status(201).json({
    //        userId : user.id,
    //        token:jwt.sign(
    //          {userId:user.id},
    //          `${process.env.TOKEN_KEY}`,
    //          {expiresIn:'24h'}
    //        )
    //      })
    
   })
   .catch(error => res.status(500).json({message:error}))
  })

  .catch(error => res.status(500).json({message:error}))
}

exports.deconnexion = (req,res) => {
  session.id = req.session.id 
  Session.findOne({where:{session_id:session.id}})
  .then(sessionIdMatch => {
    if(sessionIdMatch){
      session.destroy()
       res.status(200).json({message:`Vous avez bien été déconnectez et allez être redirigez vers la page d'accueil`})
    }

  })

  .catch(() => {
    return res.status(404).json({message:`Veuillez réessayez dans quelques instants !`})
    })
  }
