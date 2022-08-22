module.exports = (sequelize,DataTypes) => {
  return sequelize.define('User',{
    id: {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },

    utilisateur : {
      type:DataTypes.STRING,
      allowNull:false,
      unique:{
        args:true,
        msg:`Ce pseudo est déjà pris !`
      }
    },
    motdepasse : {
      type:DataTypes.STRING,
      allowNull:false
    }
  },
  {
    timestamps:false
  })
}