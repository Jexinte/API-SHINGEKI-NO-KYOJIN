
module.exports = (sequelize,DataTypes) => {
  return sequelize.define('personnage',{
    id : {
      type : DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    nom : {
      type:DataTypes.STRING,
      unique : {
        args : true,
        msg :`Ce personnage existant déjà, il ne peut être crée à nouveau`
      },

      validate : {
        notEmpty : {
          args : true,
          msg: `Ce champ ne peut être vide`
        }
      },

      allowNull : false
    },



    histoire : {
      type:DataTypes.TEXT,
      validate : {
        notEmpty : {
          args : true,
          msg: `Ce champ ne peut être vide`
        }
      },
    },

    affiliation : {
      type:DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg: `Ce champ ne peut être vide`
        }
      },
    },
    origine : {
      type:DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg: `Ce champ ne peut être vide`
        }
      },
    },
    imageCarte : {
      type:DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg: `Ce champ ne peut être vide`
        }
      },
    },
    imageHistoire : {
      type:DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg: `Ce champ ne peut être vide`
        }
      },
    }

  },
  {
    timestamps:false
  })
}