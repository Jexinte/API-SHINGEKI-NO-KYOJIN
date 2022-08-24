const { Personnages } = require('../db/sequelize')
const {ValidationError,UniqueConstraintError} = require('sequelize')


exports.AfficheLesPersonnages = (req,res) => {
  Personnages.findAll({
    order : ['nom'],
   //
  })
  .then(personnages => res.status(200).json(personnages))
  .catch(error => res.status(404).json({message:error}))
}

exports.creationPersonnage = (req,res) => {
  Personnages.create({
    nom : req.body.nom,
    histoire:req.body.histoire,
    affiliation:req.body.affiliation,
    origine : req.body.origine,
    imageCarte : `${req.protocol}://${req.get('host')}/images/${req.files['imageCarte'][0].filename}`,
    imageHistoire : `${req.protocol}://${req.get('host')}/images/${req.files['imageHistoire'][0].filename}`,
  })

  .then(personnage => res.status(201).json({message:personnage}))
   .catch(error => {

      if(error instanceof ValidationError){
        return res.status(400).json({message:error}) 
      }
     if(error instanceof UniqueConstraintError)
       return res.status(400).json({message:error})
   })
}