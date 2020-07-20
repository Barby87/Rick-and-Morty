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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
