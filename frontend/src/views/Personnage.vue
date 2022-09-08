<template>
<Menu></Menu>
<div class="container-personnages">
  <div class="left">
    <img src="" alt="">
  </div>

  <div class="right">
    <h1></h1>
    <p></p>
  </div>
 
    <a id="modifier">Modifier</a>
    <a @click="supprimerPersonnage" id="supprimer">Supprimer</a>

</div>

</template>
<script>
import Menu from '@/components/Menu.vue'
const axios = require('axios') 
const token = localStorage.getItem('token')

export default {

   mounted:function() {
   this.afficheLaCarteDuPersonnage()
   },
   methods : {
     afficheLaCarteDuPersonnage() {
       
       
    
        const searchParams = new URLSearchParams(window.location.search)
        const idDansLurl = parseInt(searchParams.get('id'))
        axios({
          method:'get',
          url:`http://localhost:3000/api/personnages/${idDansLurl}`,
          withCredentials:true
        })     
      
       .then(personnage => {

      
        const img = document.querySelector('.left > img')
        const h1 = document.querySelector('.right > h1')
        const paragraph = document.querySelector(' .right p')
        const boutonModifier = document.getElementById('modifier')
        img.src = personnage.data['message'].imageHistoire
        h1.textContent = personnage.data['message'].nom
        paragraph.textContent = personnage.data['message'].histoire
        modifier.href=`/modifier_un_personnage?id=${idDansLurl}`
       })
     },

     supprimerPersonnage(){
      const searchParams = new URLSearchParams(window.location.search)
        const idDansLurl = parseInt(searchParams.get('id'))
      axios({
        method:'delete',
        url:`http://localhost:3000/api/personnages/${idDansLurl}`,
        withCredentials:true
      }).then(res => {
        if(res.status === 200)
         
            return window.location.href="/listePersonnages"
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
.container-personnages {

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

#modifier{
  position: absolute;
bottom: -85px;
right: 18em;
font-size: 2em;
background: lightgreen;
border-radius: 10px;
padding: .3em 1em;
color:white;
}

#supprimer {
  position: absolute;
font-size: 2em;
background: red;
border-radius: 10px;
padding: .3em 1em;
color:white;
right:10em;
bottom: -85px;
cursor: pointer;
}
</style>

