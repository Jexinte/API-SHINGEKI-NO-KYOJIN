const {User} = require('../db/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()


exports.createUser = (req,res) => {
  bcrypt.hash(req.body.motdepasse,10).then(hash =>{

    User.create({
        utilisateur : req.body.utilisateur,
        motdepasse : hash
    })
    
    .then(user => res.status(201).json({message:`L'utilisateur a bien été créé !`,data:user}))
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

  User.findOne({where : {utilisateur:req.body.utilisateur}})
  .then(user => 
    {
    if(!user)
      return res.status(400).json({message:`Cet utilisateur n'existe pas !`})

   bcrypt.compare(req.body.motdepasse,user.motdepasse)
   .then(motdepasse => {
    
    //! Si le mot de passe n'est pas le bon !
    if(!motdepasse)
      return res.status(403).json({message:`Le mot de passe est incorrect`})
    //* Sinon on crée un token pour l'utilisateur 
    
        res.status(201).json({
          userId : user.id,
          token:jwt.sign(
            {userId:user.id},
            `${process.env.TOKEN_KEY}`,
            {expiresIn:'30s'}
          )
        })
    
   })
   .catch(error => res.status(500).json({error}))
  })

  .catch(error => res.status(500).json({error}))
}

