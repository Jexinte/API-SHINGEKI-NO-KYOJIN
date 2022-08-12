<template>
<!-- PERSONNAGES  -->
<section class="personnages">
    <div class="box">
      <img src="https://www.coyotemag.fr/wp-content/uploads/2021/11/LAttaque-des-Titans.jpg" alt="">
      <h1>Eren</h1>
    </div>
  </section>
</template>

<script>
// export default {

//   mounted:function() {
//   this.afficheLesCartesAvecTransition()
//   },
//   methods : {
//     afficheLesCartesAvecTransition() {
//       const box = document.querySelectorAll('.personnages .box');

//       box.forEach(element => {

//         const test = () => {
//           element.style.transition = "display 700ms ease-out"
//           element.style.display = "block"

//         }
  
//         test()
//       })

//     }
//   }
// }
</script>

<style scoped>


.box {
  width: 200px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
  transition: transform ease-in-out 500ms;
}
.box img{
  width: 100%;

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

h1{
  padding:.3em;
}

</style>

