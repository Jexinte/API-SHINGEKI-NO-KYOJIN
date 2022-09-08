<template>
<Menu></Menu>
<section class="personnages">

  </section>
</template>

<script>
import Menu from '@/components/Menu.vue'
 export default {

   mounted:function() {
   this.afficheLesCartesDesPersonnages()
   },
   methods : {
     afficheLesCartesDesPersonnages() {
      const sectionPersonnages = document.querySelector('.personnages')
       
       const axios = require('axios') 
       

        
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
   },
   components:{  Menu }
 }
</script>

<style scoped>
header{
  position: fixed;
  width: 10em;
  height: 100vh;
  text-align: center;
  box-shadow: 10px 5px 10px rgba(0,0,0,0.1);
}
nav {
  display: flex;
  flex-direction: column;
  gap:6em;
  position: relative;
  top:15em;
}
nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin-right: 20px;
  font-size: 1.5em;
  position: relative;
}


#eldiens::after{
  content: '';
  position: absolute;
  bottom: 0;
  left:45px;
  width: 0px;
  border-bottom: 1px solid #666666;
  border-width: 4px;
  top:27px;
  transition : width 700ms ease-in-out;
}

#eldiens:hover::after{
  width: 50px;
}


#mahr::after{
  content: '';
  position: absolute;
  bottom: 0;
  left:45px;
  width: 0px;
  border-bottom: 1px solid #008000;
  border-width: 4px;
  top:27px;
  transition : width 700ms ease-in-out;
}

#mahr:hover::after{
  width: 50px;
}


#titans::after{
  content: '';
  position: absolute;
  bottom: 0;
  left:45px;
  width: 0px;
  border-bottom: 1px solid #0000FF;
  border-width: 4px;
  top:27px;
  transition : width 700ms ease-in-out;
}

#titans:hover::after{
  width: 50px;
}

nav a:visited {
  color:black;
}

nav a.router-link-exact-active {
  color: black;
}

#logo{
  border-radius: 50%;
}

</style>