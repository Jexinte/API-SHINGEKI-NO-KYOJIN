<template>
<Menu></Menu>
<form action="/api/personnages" method="post" enctype="multipart/form-data">
  <!-- NOM -->
    <label for="nom">
      Nom du personnage :
      <br>
      <input type="text" name="nom" id="nom" v-model="nom" placeholder="Mikasa Ackerman" size="50">
    </label>

  <!-- HISTOIRE -->
        <label for="histoire">
          Histoire du personnage : <br>
        <textarea name="histoire" id="histoire" v-model="histoire" placeholder="Mikasa Ackerman (japonais : ミカサ・アッカーマン, Hepburn : Mikasa Akkāman?) est la sœur adoptive d'Eren Jäger, ainsi que l'une des protagonistes principaux de la série..." rows="5" cols="37"></textarea>
  </label>

    <!-- AFFILIATION -->
    <label for="affiliation">
      Affiliation du personnage : <br>
      <input type="text" name="affiliation" id="affiliation" v-model="affiliation" placeholder="Bataillon d'exploration" size="50">
    </label>

     <!-- ORIGINE -->
    <label for="origine">
      Origine du personnage :<br>
      <input type="text" name="origine" id="origine" v-model="origine" placeholder="Eldienne" size="50">
    </label>

    <!-- IMAGECARTE -->
    <input type="file" name="imageCarte" id="imageCarte"  @change="onFileChange">
  
      <img id="output" :src="previewUrl" v-if="previewUrl">
      <p v-else>No image...</p>
   
    <!-- IMAGEHISTOIRE -->
    <input type="file" name="imageHistoire" id="imageHistoire"  @change="onFileChange2">
    
      <img id="output2" :src="previewUrl2" v-if="previewUrl2">
      <p v-else>No image...</p>
    

    <!-- SUBMIT -->
   <input type="submit" value="Envoyer" > 

</form>

</template>

<script>

import Menu from '@/components/Menu.vue'
 const axios = require('axios')
export default {
  data(){
    return {
      nom : '',
      histoire :'',
      affiliation:'',
      origine : '',
      previewUrl : '',
      previewUrl2:''
    }
  },

mounted:function(){
  this.créationDuPersonnage()
},

    methods: {
    
    
      onFileChange: function (event) {
      const file = event.target.files[0]
      if (!file) {
        return false
      }
      if (!file.type.match('image.*')) {
        return false
      }
      const reader = new FileReader()
      const that = this
      reader.onload = function (e) {
        that.previewUrl = e.target.result
      }
      reader.readAsDataURL(file)
    },

    onFileChange2: function (event) {
      const file = event.target.files[0]
      if (!file) {
        return false
      }
      if (!file.type.match('image.*')) {
        return false
      }
      const reader = new FileReader()
      const that = this
      reader.onload = function (e) {
        that.previewUrl2 = e.target.result
      }
      reader.readAsDataURL(file)
    },

    créationDuPersonnage(){
      const form = document.querySelector('form')
      
      form.addEventListener('submit',(e) => {
       
        e.preventDefault()

      axios(
      {
        method:'post',
        url:'http://localhost:3000/api/personnages',
        // method:'post',
        //   body: new FormData(form),
        
        data : new FormData(form)
      })

      .then(response =>{
          if(response.status){
            alert('Le personnage a bien été créé , vous allez être redirigée vers la page d\'accueil')
            setTimeout(() => {
              window.location.href = "/listePersonnages"

            },100)

          }
      } )
      

      })

    }


    
  },
  components:{Menu}
}
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  align-items: center;
background-image: url(http://images6.fanpop.com/image/photos/41500000/attack-on-titan-wallpaper-shingeki-no-kyojin-attack-on-titan-41500655-1366-768.png);
height: 100vh;
background-size: cover;
font-size: 1.5em;
gap:1em;
text-align: center;
padding-top:3em;
}

input {
  padding:1em;
}

input[type="text"]{
  margin-top:.8em
}

textarea{
  margin-top:.8em
}


#output {
  max-width: 100px;
}

#output2 {
  max-width: 100px;
}




</style>