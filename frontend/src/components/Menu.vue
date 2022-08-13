<template>
<!-- HEADER -->
<header>
      <nav>
        <router-link to="/"><img src="@/assets/img/logo_menu.jpg " id="logo" height="50" width="50"></router-link> 
        <router-link to="/eldiens?eldiens=Eldiens">Eldiens</router-link> 
        <router-link to="/mahr?mahr=Mahr">Mahr</router-link> 
        <router-link to="/titans?titans=Titan">Titans</router-link> 
      </nav>
  </header>
      <router-view/>
</template>

