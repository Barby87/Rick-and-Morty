<template>
  <div>
      <img :src="imgError" alt="">    
  </div>
</template>

<script>
// Importando imagen de error 404
import Error404 from '../assets/img/error404.jpg.webp';
export default {
    name: 'Error404',
    data () {
        return {
            imgError: Error404
        }
    }
}
</script>

<style>

</style>