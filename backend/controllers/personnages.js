const { Personnages } = require('../db/sequelize')
exports.AfficheLesPersonnages = (req,res) => {
  Personnages.findAll({
    order : ['nom'],
   //
  })
  .then(personnages => res.json(personnages))
  .catch(error => res.json({message:error}))
}