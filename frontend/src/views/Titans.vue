<template>
<section class="personnages">

  </section>
</template>

<script>
 export default {

   mounted:function() {
   this.afficheLesCartesDesPersonnages()
   },
   methods : {
     afficheLesCartesDesPersonnages() {
       const sectionPersonnages = document.querySelector('.personnages')
       
       fetch(`http://localhost:3000/api/personnages`)
       .then(response => {
        return response.json()
       })

       .then(personnages => {
        const searchParams = new URLSearchParams(window.location.search)
        
        
        personnages.map(personnage => {
        if(searchParams.get('titans') === personnage.surnom) {
          const box = document.createElement('a')
               box.className = "box"
        sectionPersonnages.append(box)
         const img = document.createElement('img')
         box.appendChild(img)
         img.src = personnage.imageCarte
        const h1 = document.createElement('h1')
              h1.className = "h1"
        box.appendChild(h1)
        h1.textContent = personnage.nom
        }
       })
       })
     }
   }
 }
</script>