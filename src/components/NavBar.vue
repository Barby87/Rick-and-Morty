<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-top py-3">
        <div class="container">
            <!-- Logo que redirige a 'Home' -->
            <router-link class="navbar-brand font-weigth-bold shadows" to='/'>Rick <span class="span_logo">And</span> Morty</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Búsqueda personaje -->
                
                <ul class="navbar-nav ml-auto">
                   <li>
                       <form class="form-inline my-2 my-lg-0">
                        <input class="form-control input-group mr-sm-2" type="search" placeholder="Búsqueda de personaje" aria-label="Search" v-model="searching">
                       </form>
                   </li>
                    <li class="nav-item">
                        <router-link class="nav-link font-weight-bold" to='/opinions'>Opiniones</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link font-weight-bold" to='/favorites'>Favoritos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link font-weight-bold" to='/administration'>Administración</router-link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            searching: ''
        }
    },

    watch: {
        searching() {
            this.$store.state.searching = this.searching;
        }
    }
}
</script>

<style lang="scss" scoped>
.shadows { 
    font-family: 'Shadows Into Light', cursive;
    font-size: 1.8rem;
    font-weight: bold
}

.span_logo {
    font-size: 1rem;
}

// Importación font-family Google Fonts Shadows Into Light
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
</style>