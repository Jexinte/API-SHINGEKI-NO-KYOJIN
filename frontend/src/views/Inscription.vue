<template>
<div class="container">

  <form action="/inscription" method="post" @submit.prevent="onSubmit">
    <a href="/connexion" id="connexion">Connexion</a>
    <label for="utilisateur">
      Utilisateur : <br>
    <input type="text" v-model="utilisateur" name="utilisateur" id="utilisateur" size="50">
  </label>

  <label for="motdepasse">
    Mot de passe : <br>
    <input type="password" v-model="motdepasse" name="motdepasse" id="motdepasse" size="50">
  </label>

  <input type="submit" value="Envoyer" id="submit">
</form>
<div class="right">
  <img src="@/assets/img/logo_snk.webp" alt="">
</div>
  </div>
</template>
<script>
const axios = require('axios')
export default{
  data(){
    return {
      utilisateur :'',
      motdepasse : '',
    }
  },
  mounted:function(){
    this.creationUtilisateur()
  },

  methods : {
    creationUtilisateur(){
      const form = document.querySelector('form')
  form.addEventListener('submit',(e) => {
    
    if(this.utilisateur === '' || this.motdepasse === "") {

    e.preventDefault()
      alert(`Merci de saisir un nom utilisateur ainsi qu'un mot de passe !`)
   }
  else
    axios({
      method:'post',
      url:'http://localhost:3000/api/auth/inscription',
      data : new FormData(form)
    })
    .then(res => {
      if(res.status === 201)
      document.cookie = `utilisateur=${res.data['utilisateur']}`
      document.cookie = ` sessionId = ${res.data['idSession']}`
        window.location.href="/connexion"
    })
  })
    }
  }
}
</script>

<style scoped>

.container{
  display: flex;
  gap:2em
}
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:1em;
  font-size: 2em;
  min-height: 100vh;
  box-shadow: 1px 5px 10px rgba(0,0,0,0.5);
  width: 50%;
  position: relative;
}

.right{
  width: 50%;
  display: flex;
  justify-content: center;
  padding-top: 15em;
}

.right img {
height: 500px;
}

#connexion {
  position: absolute;
  top:1em;
 right: 3em;
 color:#172A7C;
}

#submit{
  padding:1em 2em;
  border:none;
}

</style>