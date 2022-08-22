const {User} = require('../db/sequelize')
const bcrypt = require('bcrypt')


exports.connexionUtilisateur = (req,res) => {

  User.findOne({where : {utilisateur:req.body.utilisateur}})
  .then(user => 
    {
    if(!user)
      return res.status(400).json({message:`Cet utilisateur n'existe pas !`})

   bcrypt.compare(req.body.motdepasse,user.motdepasse)
   .then(motdepasse => {
    
    if(!motdepasse)
      return res.status(403).json({message:`Le mot de passe est incorrect`})
    
    else
      return res.status(200).json({message:`Vous êtes connectés !`})
    
   })

  })
}