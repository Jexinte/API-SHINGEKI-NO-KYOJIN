const axios = require('axios')
export default class DeconnexionUtilisateur {
  deconnexion(){
    axios({
      method:'delete',
      url:'http://localhost:3000/api/auth/deconnexion',
      withCredentials:true
    })
  
    .then(() => {
      // Permet de supprimer l'ensemble des cookies après la déconnexion !
      document.cookie.split(';').forEach(function(c) {
  document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  });

  //Faire une reponse asynchrone ?
    return window.location.href="/"
    })
  
  }
}