module.exports = (req,res,next) => {

  const {Session} = require('../db/sessionSequelize')
  //* On récupère le contenu du cookie
  const cookie = req.headers.cookie
  //* On le transforme en objet 
  const cookieObject =Object.fromEntries(cookie.split('; ').map(v=>v.split(/=(.*)/s).map(decodeURIComponent)))
  
  //* On récupère la partie de l'identifiant nécessaire pour la comparaison avec la base de donnée !
  const idSessionDansReqCookie = cookieObject.sessionId
  console.log(idSessionDansReqCookie)

  Session.findOne({where:{session_id:idSessionDansReqCookie}})
  .then(match => {
    console.log(match)
    if(!match)
      return res.status(403).json({message:`Vous n'êtes pas autorisée à voir ce contenu`})
      else
      
      next()
  })

  .catch(() => {
    res.status(500).json({msg:cookieObject})
  })


}
