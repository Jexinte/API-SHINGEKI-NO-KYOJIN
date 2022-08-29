<template>
<Menu></Menu>
<section class="personnages">

  </section>
</template>

<script>
import Menu from '@/components/Menu.vue'
 export default {
    mounted: function () {
        this.afficheLesCartesDesPersonnages();
    },
    methods: {
        afficheLesCartesDesPersonnages() {
            const sectionPersonnages = document.querySelector('.personnages')
       
       const axios = require('axios') 
       const token = localStorage.getItem('token')
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        
        axios.get(`http://localhost:3000/api/personnages/`)   
        
        .then(personnages => {
          const searchParams = new URLSearchParams(window.location.search)
         
          for (const personnage of personnages.data) {
            if(personnage.origine === searchParams.get('titans')){
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
    },
    components: { Menu }
}
</script>