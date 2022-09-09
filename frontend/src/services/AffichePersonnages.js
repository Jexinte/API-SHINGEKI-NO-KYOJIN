const axios = require('axios')

export default class AffichagePersonnage {

  afficheLesCartesDePersonnages(){
    const sectionPersonnages = document.querySelector('.personnages')


    axios({
      method:'get',
      url:`http://localhost:3000/api/personnages`,
      withCredentials:true
    })     

    

    .then(personnages => {
      personnages.data['data'].map(personnage => {
    
       const box = document.createElement('a')
             box.className = "box"
             box.href=`/personnage?id=${personnage.id}`
             sectionPersonnages.append(box)
       const img = document.createElement('img')
             box.appendChild(img)
             img.src = personnage.imageCarte
       const h1 = document.createElement('h1')
             h1.className = "h1"
             box.appendChild(h1)
             h1.textContent = personnage.nom
     })

    })

    .catch(error => {
      if(error.response['status'] === 403 || 500)
        return window.location.href="/"
   
    })
  }
}