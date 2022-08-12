const { Sequelize, DataTypes } = require('sequelize')
const PersonnagesModel = require('../models/Personnage')
const PersonnagesDonnées = require('./personnages')
require('dotenv').config()
const sequelize = new Sequelize(
  `${process.env.NAME_DB}`,
  `${process.env.NAME_USER}`,
  ``,

  {
    host : `${process.env.HOST}`,
    port : `${process.env.PORT}`,
    dialect :`${process.env.DIALECT}`,
    logging:false
  }
)

const Personnages = PersonnagesModel(sequelize,DataTypes)
const initialisationConnexionBdd = () => {
  sequelize.authenticate()
  .then(_ => console.log('La connexion a la base de donneés a bien été effectuée'))
  .catch(error => console.error(error))

  sequelize.sync({force:true})
  .then(_ => {
      console.log('La table a bin été synchronisée !')
    PersonnagesDonnées.map(personnage => {
      Personnages.create({
        nom : personnage.nom,
        surnom : personnage.surnom,
        histoire:personnage.histoire,
        affiliation:personnage.affiliation,
        origine:personnage.origine,
        imageCarte:personnage.imageCarte,
        imageHistoire : personnage.imageHistoire
      })
    })
  })
}

module.exports = {
  initialisationConnexionBdd
}