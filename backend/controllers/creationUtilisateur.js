const {User} = require('../db/sequelize')
const {UniqueConstraintError} = require('sequelize')
const bcrypt = require('bcrypt')
exports.createUser = (req,res) => {
  bcrypt.hash(req.body.motdepasse,10).then(hash =>{

    User.create({
        utilisateur : req.body.utilisateur,
        motdepasse : hash
    })
    
    .then(user => res.status(200).json({message:`L'utilisateur a bien été créé !`,data:user}))
    .catch(error => {
      if(error instanceof UniqueConstraintError)
        return res.status(400).json({message:error.message})
    })
  })

  .catch(() => {
    return res.status(500).json({message:`Veuillez réessayez dans quelques instants !`})
  })
}