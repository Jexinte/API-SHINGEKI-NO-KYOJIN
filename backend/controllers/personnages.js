const { Personnages } = require('../db/sequelize')
exports.AfficheLesPersonnages = (req,res) => {
  Personnages.findAll()
  .then(personnages => res.json(personnages))
  .catch(error => res.json({message:error}))
}