<template>
  <div id="app">
    <NavBar/>
    <router-view class="my-5 py-5"/>
    <Footer class="mt-3"/>
  </div>
</template>

<script>
// Importando función conectionApi como módulo
import { conectionApi } from './config/configApi';

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
    conectionApi();
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}

h1 {
  text-align: center;
}

</style>
