const axios = require('axios')

export default class Mahr {
  affichePersoMahr(){
    const sectionPersonnages = document.querySelector('.personnages')
       

    

     
    axios({
       method:'get',
       url:`http://localhost:3000/api/personnages`,
       withCredentials:true
     })     
     
     .then(personnages => {
       const searchParams = new URLSearchParams(window.location.search)
      
       for (const personnage of personnages.data['data']) {
         if(personnage.origine === searchParams.get('mahr')){
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
      h1.style.color = "#666666"
         }
       }
  
    })
  }
}