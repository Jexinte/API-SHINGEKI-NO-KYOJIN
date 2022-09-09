<template>
<!-- HEADER -->
<header id="header">
      <nav>
        <router-link to="/listepersonnages"><img src="@/assets/img/logo_menu.jpg " id="logo" height="50" width="50"></router-link> 
        <router-link to="/eldiens?eldiens=Eldiens" id="eldiens">Eldiens</router-link> 
        <router-link to="/mahr?mahr=Mahr" id="mahr">Mahr</router-link> 
        <router-link to="/titans?titans=Titans" id="titans">Titans</router-link> 
        <router-link to="/créationPersonnage" id="créationpersonnage">Ajout d'un personnage</router-link>
        <a id="Déconnexion"  @click="deconnexionDeLutilisateur">Deconnexion</a>
     
      </nav>
  </header>
      <router-view/>
</template>
<script>
  import DeconnexionUtilisateur from '@/services/Deconnexion';
  const deconnexionDeLutilisateur = new DeconnexionUtilisateur()

  export default {

    methods : {
      deconnexionDeLutilisateur(){
        deconnexionDeLutilisateur.deconnexion()
      }
    }
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

#Déconnexion {
  cursor: pointer;
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