<template>
<Menu></Menu>
<section class="personnages">
  
</section>
</template>

<script>

import Menu from '@/components/Menu.vue'
import Eldiens from '@/services/AffichePersonnagesEldiens'
const eldiens = new Eldiens()
export default {

   mounted:function() {
    eldiens.affichePersoEldiens()
   },

   components : {Menu}
 }
</script>