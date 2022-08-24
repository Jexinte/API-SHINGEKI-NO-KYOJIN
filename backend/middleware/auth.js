const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

module.exports = (req,res,next) => {
  try {
    
    const token = req.headers.authorization.split(' ')[1] //* Récupération du token cryptée
        const decodedToken = jwt.verify(tokenCrypté,`${process.env.TOKEN_KEY}`) //* Le token est décodé afin de récupérer l'identifiant ci-dessous
    
    const userId = decodedToken.userId

    //! Si l'identifiant de l'utilisant ne correspond pas avec celui présent dans le token
    if(req.body.userId && req.body.userId !== userId)
      throw `L'identifiant de l'utilisateur est invalide !`
    //* Sinon l'utilisateur est autorisé à effectué ses opérations
    else
      next()
  }

  catch{
    res.status(401).json({
      message :`L'utilisateur n'est pas autorisé à effectué cette opération`
    })
  }
}