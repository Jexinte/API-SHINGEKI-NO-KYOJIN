const axios = require('axios')

export default class CreationDunPersonnage {
  créationDuPersonnage(){
    const form = document.querySelector('form')
      
    form.addEventListener('submit',(e) => {
     
      e.preventDefault()

    axios(
    {
      method:'post',
      url:'http://localhost:3000/api/personnages',
      data : new FormData(form),
      withCredentials:true
    })

    .then(response =>{
        if(response.status){
          alert('Le personnage a bien été créé , vous allez être redirigée vers la page d\'accueil')
          setTimeout(() => {
            window.location.href = "/listePersonnages"

          },100)

        }
    })

    .catch(error => {
      if(error.response.status === 400)
         alert(error.response['data'].message.errors[0].message)
         return window.location.href="/listepersonnages"
    })
    

    })
  }
}