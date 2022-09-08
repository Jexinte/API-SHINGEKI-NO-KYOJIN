const { Sequelize, DataTypes} = require('sequelize')
const SessionModel = require('../models/Session')
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

const Session = SessionModel(sequelize,DataTypes)
const init = () => {

  sequelize.authenticate()
  .then(_=> console.log('La table de la session a bien été crée dans la base de donnée de l`\api snk'))

  sequelize.sync({force:true}).then(() => console.log(`Les données de session ont bien été rénitialisées !`))
}

module.exports = {
  init,Session
}