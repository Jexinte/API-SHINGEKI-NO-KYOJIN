<template>
<Menu></Menu>

<!-- PERSONNAGES  -->
<section class="personnages">

  </section>
</template>

<script>

import Menu from '@/components/Menu.vue'
import AffichagePersonnage  from '@/services/AffichePersonnages'
const AfficheTousLesPersonnages = new AffichagePersonnage()
 export default {
 
   mounted:function() {
    AfficheTousLesPersonnages.afficheLesCartesDePersonnages()
   },

   components:{  Menu }
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
/* #Déconnexion {
  position: absolute;
  left:14em;
  cursor: pointer;
} */
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
