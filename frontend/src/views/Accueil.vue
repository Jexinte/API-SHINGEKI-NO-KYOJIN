<template>
<!-- PERSONNAGES  -->
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
        
        personnages.map(personnage => {
        
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
     }
   }
 }
</script>

<style>

.box {
  width: 200px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
  transition: transform ease-in-out 500ms;
}
.box img{
  width: 100%;
  height: 85%;
}

.box:hover{
  transform: scale(1.2);
}
.personnages {

display: flex;
gap: 2em;
text-align: center;
position: absolute;
top: 0;
z-index: -1;
left: 14em;
flex-wrap: wrap;
padding-top: 4em;

}


.h1{
  padding:.3em;
}

</style>
