const axios = require('axios')

export default class Connexion {
  connexionUtilisateur(){
    const form = document.querySelector('form')

    form.addEventListener('submit',(e) => {
    
      axios({
        method:'post',
        url:'http://localhost:3000/api/auth/connexion',
        data : new FormData(form),
        withCredentials:true,
  
      })
  
   
         .then(res=>{
  
          const cookie = Object.fromEntries(document.cookie.split('; ').map(v=>v.split(/=(.*)/s).map(decodeURIComponent)))
          console.log(cookie)
             if(res.status === 200 && cookie.utilisateur === res.data['utilisateur'] && cookie.sessionId === res.data['sessionId']) {
               
               return window.location.href="/listepersonnages"
            }
              //  return window.location.href="/listePersonnages"
      
         })
  
         .catch(error => {
         if(error.status === 400)
          alert(`Merci de saisir un nom utilisateur ainsi qu'un mot de passe !`)
       
         })
    
    })
  }
}