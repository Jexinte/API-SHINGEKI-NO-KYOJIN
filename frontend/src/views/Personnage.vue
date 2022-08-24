<template>
<Menu></Menu>
<div class="container">
  <div class="left">
    <img src="" alt="">
  </div>

  <div class="right">
    <h1></h1>
    <p></p>
  </div>
</div>
</template>
<script>
import Menu from '@/components/Menu.vue'

export default {

   mounted:function() {
   this.afficheLaCarteDuPersonnage()
   },
   methods : {
     afficheLaCarteDuPersonnage() {
       const container = document.querySelector('.container')
       
       fetch(`http://localhost:3000/api/personnages`)
       .then(response => {
        return response.json()
       })

       .then(personnage => {
        
        const searchParams = new URLSearchParams(window.location.search)
        const idDansLurl = parseInt(searchParams.get('id'))
        const img = document.querySelector('.left > img')
        const h1 = document.querySelector('.right > h1')
        const paragraph = document.querySelector(' .right p')

         personnage.filter(personnage => {
           if(idDansLurl === personnage.id) 
           {
              img.src = personnage.imageHistoire
              h1.textContent = personnage.nom
              paragraph.textContent = personnage.histoire 
           }
         })
       })
     }
   },
   components:{Menu}
 }
</script>
<style scoped>
/* Mouse Memoirs Regular 400 */
@import url('https://fonts.googleapis.com/css2?family=Mouse+Memoirs&display=swap');

* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Mouse Memoirs';
}
.container {

  display: flex;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;
  gap:1em;
  position: relative;
  top: 5em;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  /* transform: skew(-20deg); */
}

.left{
  width: 50%;
  text-align: center;
}

.left img {
width: 100%;
display: block;
height: 100%;
}
.right {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap:2em;
  text-align: center;
  padding-inline:1em;
}


body{
  height: 100%;
}

a{
  text-decoration: none;
}

a{
  color:black;
}

a:visited{
  color:black;
}
/* HEADER */

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
  color: red;
  text-decoration: none;
  margin-right: 20px;
  font-size: 1.5em;
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

h1 {
  margin-top: 1em;
}

p{
  font-size: 1.5em;
  line-height: 1.8em;
  font-weight: 500;
  white-space: pre-line;
  padding-bottom: 1em;
}
</style>

<style scoped>

</style>