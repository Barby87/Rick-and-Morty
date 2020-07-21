<template>
  <div id="app">
    <NavBar/>
    <router-view class="my-5 py-5"/>
    <Footer class="mt-3"/>
  </div>
</template>

<script>
// Importación axios
import axios from 'axios';

// Importación componentes
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },

  mounted() {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log('Response api', response.data.results);
        this.$store.dispatch('apiData', response.data.results);
      })
      .catch(error => console.error(error));
  }
}
</script>

<style lang="scss">

h1 {
  text-align: center;
}

$info: #c50505d3;

@import '../node_modules/bootstrap/scss/bootstrap.scss'
</style>
